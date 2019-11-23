"use strict";

var I18n = chrome.i18n,
  MainDom = chrome.extension.getBackgroundPage(),
  Config = MainDom.config,
  SafePages = MainDom.safePages;

function hydrateControls(is_reset) {
  var el, shortcut2 = $('#shortcut2');
  if (!is_reset) {
    for (let key = 65; key < 91; key++) {
      shortcut2.append('<option value=' + key + '>' + String.fromCharCode(key));
    }
  }
  for (let id in Config) {
    el = document.getElementById(id);
    switch(Config[id].option) {
      case 'form' :
        el.value = localStorage[id];
        break;
      case 'checkable' :
        el.checked = JSON.parse(localStorage[id]);
        break;
    }
    if (el) {
      checkControlDependancies(el);
    }
  }
  
  SafePages.o.forEach(addSafePage);
  jcf.refreshAll();
}

function addSafePage(cfg_obj, index) {
  var $add_input = $('#safe_pages_cnt .input-holder'),
    $col = $add_input.parent();
  var $select_holder = $(
    '<div class="select-holder">' +
      '<select class="select-lg">' +
        '<option value="newtab">' + I18n.getMessage('optSafePageOptNewtab') + '</option>' +
        '<option value="blank">' + I18n.getMessage('optSafePageOptBlank') + '</option>' +
        '<option value="custom">' + I18n.getMessage('optSafePageOptCustom') + '</option>' +
      '</select>' +
      '<input type="text" style="display: none"/>' +
      '<span class="btn remove">remove</span>' +
    '</div>'
  ).insertBefore($add_input);
  var $select = $select_holder.find('SELECT'),
    $input = $select.next();
  $input.on('keyup', function () {
    SafePages.updateUrl($select.data('index'), checkCustomPageURL(this), !0);
  });
  $select_holder.find('.remove').on('click', function () {
    SafePages.remove($select.data('index'));
    $select_holder.remove();
    if (SafePages.o.length == 1) {
      $('.select-holder .remove').hide();
    }
  });
  $select
    .on('change', function () {
      if (this.value != "custom") {
        SafePages.updateUrl($(this).data('index'), this.value);
        $input.hide();
      } else {
        SafePages.updateUrl($(this).data('index'), MainDom.urlIndex($input.val()));
        $input.show().focus();
      }
    });
  if (cfg_obj.originalEvent) { // coming form the "add" button here
    if (SafePages.o.length == 1) {
       $('.select-holder .remove').show();
    }
    let safe_page_def_obj = JSON.parse(Config.safePage.value)[0];
    $select
      .val(MainDom.urlIndex(safe_page_def_obj.url))
      .data('index', SafePages.o.length);
    SafePages.add(safe_page_def_obj);
    jcf.replace($select);
  } else {
    if (SafePages.o.length == 1) {
      $select_holder.find('.remove').hide();
    }
    $select
      .val(MainDom.urlIndex(cfg_obj.url))
      .data('index', index);
    if ($select.val() == 'custom') {
      $input
        .val(cfg_obj.url)
        .show();
    }
  }
}

function checkCustomPageURL(element) {
  var val = element.value;
  if (val.search("://") == -1 && val.search("about:") == -1) {
    return "http://" + element.value;
  }
  return element.value;
}

function checkControlDependancies(el) {
  switch (el.id) {
    case 'shortcut' :
      $('.combo-keys .plus-block')[(el.value == 'false') ? 'addClass' : 'removeClass']('disabled');
      $('#shortcut1, #shortcut2').attr('disabled', el.value == 'false').each(function () {
        jcf.refresh(this);
      });
      break;
    case 'pwdProtect' :
      $('.signin-holder INPUT').attr('disabled', el.value == 'false');
      break;
  }
}

function resetOptions(defaults) {
  for (let i in localStorage) {
    localStorage.removeItem(i);
  }
  localStorage.configured = false;
  MainDom.configure();
  hydrateControls(true);
}

function commitOption(ev) {
  var el = ev.target,
    id = ev.target.id;
  if (id == 'pwd') {
    return;
  }
  if (id = 'pwdProtect' && localStorage.advancedProtectionSettings && el.value == 'false') {
    el.value = 'true';
    jcf.refresh(el);
    openAdvancedProtectionLayer('pwdProtect');
    return;
  }
  localStorage[el.id] = (el.value == "on") ? el.checked : el.value;
  checkControlDependancies(el);
}

function openAdvancedProtectionLayer(id) {
  var $layer = $('#advanced_pwd_protection_layer'),
    $dropzone = $('#advanced_pwd_dropzone');
  $dropzone
    .html(chrome.i18n.getMessage("optAPPDropzoneText"))
    .attr('class', '');
  $dropzone[0].dataset.drops = 0;
  $dropzone[0].dataset.id = id;
  $layer.find('[data-cta="continue"]').hide();
  $layer.find('[data-cta="save"]').hide();
  if (localStorage.advancedProtectionSettings) {
    $layer.find('.title').html(chrome.i18n.getMessage("optAPPDialogueTitle"));
    $layer.find('.manual').html(chrome.i18n.getMessage("optAPPManual"));
    $layer.find('.warning').hide();
  } else {
    $layer.find('.title').html(chrome.i18n.getMessage("optAPPSetupDialogueTitle"));
    $layer.find('.manual').html(chrome.i18n.getMessage("optAPPSetupManual"));
    $layer.find('.warning').show();
  }
  $layer.show();
}

function handleBookmarkDrop(ev) {
  ev = ev.originalEvent;
  ev.stopPropagation();
  ev.preventDefault();
  
  var element = ev.target,
    url = ev.dataTransfer.getData("Text"),
    key = hex_hmac_sha1(12, url);
  
  element.classList.add('dropped');
  element.innerHTML = url;
  
  if (localStorage.advancedProtectionSettings) {
    //active
    var $continue_button = $('#advanced_pwd_protection_layer [data-cta="continue"]');
    if (JSON.parse(localStorage.advancedProtectionSettings).key == key) {
      //right key
      $(element).addClass('success');
      $continue_button[0].dataset.id = ev.target.dataset.id;
      $continue_button[0].dataset.key = key;
      $continue_button.show();
    } else {
      //wrong key
      $(element).addClass('fail');
      $continue_button.hide();
    }
  } else {
    //inactive
    var $save_button = $('#advanced_pwd_protection_layer [data-cta="save"]');
    if (element.dataset.drops == 0) {
      $save_button.show();
    }
    $save_button[0].dataset.key = key;
  }
  element.dataset.drops++;
}

function setEvents() {
  $('SELECT, INPUT').on('change', commitOption);
  $('.signin-holder INPUT[type="button"]').on('click', function () {
    if (localStorage.advancedProtectionSettings) {
      openAdvancedProtectionLayer('pwdInput');
    } else {
      localStorage.pwd = $('#pwd').val();
    }
  });
  $('#advancedProtection').on('click', function (ev) {
    openAdvancedProtectionLayer('advancedProtection');
    ev.preventDefault();
  });
  $('#safe_pages_cnt .input-holder .btn').on('click', addSafePage);
  $('#reset_cta').on('click', resetOptions);
}

function setupAdvancedPwdProtectionLayer() {
  $('#advanced_pwd_protection_layer [data-cta="cancel"]').on('click', function () {
    $('#advanced_pwd_protection_layer').hide();
  });
  $('#advanced_pwd_protection_layer [data-cta="save"]').on('click', function () {
    var settings = {
      key:  this.dataset.key
    }
    $('#advancedProtection')[0].checked = true;
    jcf.refresh($('#advancedProtection'));
    localStorage.advancedProtectionSettings = JSON.stringify(settings);
    localStorage.advancedProtection = 'true';
    $('#advanced_pwd_protection_layer').hide();
  });
  $('#advanced_pwd_protection_layer [data-cta="continue"]').on('click', function () {
    if (JSON.parse(localStorage.advancedProtectionSettings).key == this.dataset.key) {
      //apply changes
      switch(this.dataset.id) {
        case 'pwdProtect' :
          $('#pwdProtect').val('false');
          break;
        case 'pwdInput' :
          localStorage.pwd = $('#pwd').val();
          break;
        case 'advancedProtection' :
          $('#advancedProtection')[0].checked = false;
          jcf.refresh($('#advancedProtection'));
          localStorage.removeItem('advancedProtectionSettings');
          localStorage.advancedProtection = 'false';
          break;
      }
      $('#advanced_pwd_protection_layer').hide();
    }
  });
  var $dropzone = $('#advanced_pwd_dropzone');
  $dropzone
    .on('dragenter', function(ev) {
      ev = ev.originalEvent;
      ev.stopPropagation();
      ev.preventDefault();
    })
    .on('dragover', function(ev) {
      ev = ev.originalEvent;
      ev.stopPropagation();
      ev.preventDefault();
      ev.dataTransfer.dropEffect = 'copy';
    })
    .on('drop', handleBookmarkDrop);
}

function localizeHTML() {
  $('[data-i18n]').each(function () {
    var msg = chrome.i18n.getMessage(this.getAttribute('data-i18n'));
    if (this.tagName == 'INPUT') {
      if (this.getAttribute('placeholder')) {
        this.setAttribute('placeholder', msg);
      } else if (this.value) {
        this.value = msg;
      }
    } else {
      this.innerHTML = msg;
    }
  });
}

function init() {
  setEvents();
  localizeHTML();
  hydrateControls();
  setupAdvancedPwdProtectionLayer();
  document.body.style.display = '';
}

document.addEventListener('DOMContentLoaded', init);