/**
 * GUI generator for Stock tools
 *
 * (c) 2009-2017 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */
'use strict';
import H from '../parts/Globals.js';

var addEvent = H.addEvent,
    createElement = H.createElement,
    doc = H.doc,
    each = H.each,
    pick = H.pick,
    fireEvent = H.fireEvent,
    getStyle = H.getStyle,
    css = H.css,
    DIV = 'div',
    SPAN = 'span',
    UL = 'ul',
    LI = 'li',
    PREFIX = 'highcharts-',
    activeClass = PREFIX + 'active';

H.setOptions({
    stockTools: {
        gui: {
            enabled: true,
            className: 'stocktools-wrapper',
            toolbarClassName: 'stocktools-toolbar',
            buttons: [
                'indicators',
                'simpleShapes',
                'lines',
                'crookedLines',
                'measure',
                'advanced',
                'toggleAnnotations',
                'separator',
                'verticalLabels',
                'flags',
                'separator',
                'zoomChange',
                'typeChange',
                'separator',
                // 'indicators',
                'currentPriceIndicator',
                'saveChart'
            ],
            definitions: {
                simpleShapes: {
                    items: ['circle', 'rectangle', 'label'],
                    circle: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/text.svg)'
                    },
                    rectangle: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/text.svg)'
                    },
                    label: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/text.svg)'
                    }
                },
                flags: {
                    items: [
                        'flagCirclepin',
                        'flagDiamondpin',
                        'flagSquarepin',
                        'flagSimplepin'
                    ],
                    flagSimplepin: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/flag-basic.svg)'
                    },
                    flagDiamondpin: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/flag-diamond.svg)'
                    },
                    flagSquarepin: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/flag-square.svg)'
                    },
                    flagCirclepin: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/flag-circle.svg)'
                    }
                },
                lines: {
                    items: [
                        'segment',
                        'arrowSegment',
                        'ray',
                        'arrowRay',
                        'line',
                        'arrowLine',
                        'horizontalLine',
                        'verticalLine'
                    ],
                    symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)',
                    segment: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    arrowSegment: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    ray: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    arrowRay: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    line: {
                        type: 'aaa',
                        label: 'bbb',
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    arrowLine: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    verticalLine: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    horizontalLine: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    }
                },
                crookedLines: {
                    items: ['crooked3', 'crooked5', 'elliott3', 'elliott5'],
                    crooked3: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                    },
                    crooked5: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                    },
                    elliott3: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                    },
                    elliott5: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                    }
                },
                verticalLabels: {
                    items: [
                        'verticalCounter',
                        'verticalLabel',
                        'verticalArrow',
                        'verticalDoubleArrow'
                    ],
                    verticalCounter: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    },
                    verticalLabel: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    },
                    verticalArrow: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    },
                    verticalDoubleArrow: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    }
                },
                advanced: {
                    items: ['fibonacci', 'pitchfork', 'parallel-channel'],
                    pitchfork: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    },
                    fibonacci: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/fibonacci.svg)'
                    },
                    'parallel-channel': {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    }
                },
                measure: {
                    items: ['measureXY', 'measureX', 'measureY'],
                    measureX: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/measure-xy.svg)'
                    },
                    measureY: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/measure-x.svg)'
                    },
                    measureXY: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/measure-y.svg)'
                    }
                },
                toggleAnnotations: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                },
                currentPriceIndicator: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                },
                indicators: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                },
                zoomChange: {
                    items: ['zoomX', 'zoomY', 'zoomXY'],
                    zoomX: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    },
                    zoomY: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    },
                    zoomXY: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    }
                },
                typeChange: {
                    items: ['typeOHLC', 'typeLine', 'typeCandlestick'],
                    typeOHLC: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/series-ohlc.svg)'
                    },
                    typeLine: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/series-line.svg)'
                    },
                    typeCandlestick: {
                        symbol: 'url(http://utils.highcharts.local/samples/graphics/series-candlestick.svg)'
                    }
                },
                saveChart: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                }
            }
        }
    }
});

// Run HTML generator
addEvent(H.Chart, 'afterGetContainer', function () {
    var chartOptions = this.options,
        guiOptions = chartOptions.stockTools && chartOptions.stockTools.gui;

    if (guiOptions.enabled) {
        this.stockToolbar = new H.Toolbar(guiOptions, this);
    }
});

addEvent(H.Chart, 'destroy', function () {
    if (this.stockToolbar) {
        this.stockToolbar.destroy();
    }
});

addEvent(H.Chart, 'redraw', function () {
    if (this.stockToolbar) {
        this.stockToolbar.redraw();
    }
});

/*
 * Toolbar Class
 *
 * @param {Object} - options of toolbar
 * @param {Chart} - Reference to chart
 *
 */

H.Toolbar = function (options, chart) {
    this.chart = chart;
    this.options = options;

    this.visible = pick(options.enabled, true);

    this.createHTML();
    this.popup = new H.Popup(this.wrapper);
    this.init();

    this.showHideNavigatorion();
};

H.Toolbar.prototype = {
    /*
     * Initialize the toolbar. Create buttons and submenu for each option
     * defined in `stockTools.gui`.
     *
     */
    init: function () {
        var _self = this,
            chart = this.chart,
            guiOptions = this.options,
            addButton = _self.addButton,
            addSubmenu = _self.addSubmenu,
            toolbar = doc
                .getElementsByClassName(guiOptions.toolbarClassName)[0],
            buttons = guiOptions.buttons,
            defs = guiOptions.definitions,
            button;

        _self.chart = chart;

        each(buttons, function (btnName) {
            if (btnName === 'separator') {
                // create single button
                button = addButton(toolbar, 'separator');
            } else {
                button = addButton(toolbar, defs[btnName], btnName);
                if (defs[btnName].items && defs[btnName].items.length > 0) {
                    // create submenu buttons
                    addSubmenu.call(_self, button, defs[btnName], guiOptions);
                }
            }
        });

        fireEvent(this, 'afterInit');
    },
    /*
     * Create submenu (list of buttons) for the option. In example main button
     * is Line, in submenu will be buttons with types of lines.
     *
     * @param {Object} - button which has submenu
     * @param {Array} - list of all buttons
     * @param {Object} - gui options
     *
     */
    addSubmenu: function (parentBtn, buttons, guiOptions) {
        var _self = this,
            items = buttons.items,
            addButton = this.addButton,
            submenuArrow = parentBtn.submenuArrow,
            buttonWrapper = parentBtn.buttonWrapper,
            buttonWidth = getStyle(buttonWrapper, 'width'),
            wrapper = doc.getElementsByClassName(guiOptions.className)[0],
            allButtons = doc
                .getElementsByClassName(
                    guiOptions.toolbarClassName
                )[0].childNodes,
            topMargin = 0,
            submenuWrapper,
            firstSubmenuItem,
            submenuItems,
            submenuBtn;

        // create submenu container
        submenuWrapper = createElement(UL, {
            className: 'highcharts-submenu-wrapper'
        }, null, buttonWrapper);

        // add items to submenu
        each(items, function (btnName) {
            // add buttons to submenu
            submenuBtn = addButton(submenuWrapper, buttons[btnName], btnName);

            addEvent(submenuBtn.mainButton, 'click', function () {
                _self.switchSymbol(this, buttonWrapper, true);
                submenuWrapper.style.display = 'none';
            });
        });

        firstSubmenuItem = submenuWrapper
                .querySelectorAll('li > .highcharts-menu-item-btn')[0];

        // replace current symbol, in main button, with submenu's button style
        this.switchSymbol(firstSubmenuItem, false);

        // show / hide submenu
        addEvent(submenuArrow, 'click', function () {

            // Erase active class on all other buttons
            each(allButtons, function (btn) {
                if (btn !== buttonWrapper) {
                    btn.classList.remove('highcharts-current');
                    submenuItems =
                        btn.querySelectorAll('.highcharts-submenu-wrapper');

                    // hide submenu
                    if (submenuItems.length > 0) {
                        submenuItems[0].style.display = 'none';
                    }
                }
            });

            // hide menu
            if (buttonWrapper.className.indexOf('highcharts-current') >= 0) {
                buttonWrapper.classList.remove('highcharts-current');
                submenuWrapper.style.display = 'none';
            } else {
                // show menu
                // to calculate height of element
                submenuWrapper.style.display = 'block';

                // main button offset
                topMargin = buttonWrapper.offsetTop;

                // calculate if submenu should be moved (when is out of the box)
                if (
                    (submenuWrapper.offsetHeight + topMargin) >
                    wrapper.offsetHeight
                ) {
                    topMargin -= (submenuWrapper.offsetHeight + topMargin) -
                        wrapper.offsetHeight;
                }

                // apply calculated styles
                css(submenuWrapper, {
                    top: topMargin + 'px',
                    left: buttonWidth + 'px'
                });

                buttonWrapper.className += ' highcharts-current';
            }
        });
    },
    /*
     * Create single button. Consist of `<li>` , `<span>` and (if exists)
     * submenu container.
     *
     * @param {HTMLDOMElement} - HTML reference, where button should be added
     * @param {Object} - button options
     * @param {String} - name of functionality mapped for specific class
     *
     * @return {Object} - references to all created HTML elements
     */
    addButton: function (target, options, btnName) {
        var items = options.items,
            classMapping = H.Toolbar.prototype.classMapping,
            userClassName = options.className || '',
            mainButton,
            submenuArrow,
            buttonWrapper;

        // main button wrapper
        buttonWrapper = createElement(LI, {
            className: classMapping[btnName] + ' ' + userClassName
        }, null, target);

        // single button
        mainButton = createElement(SPAN, {
            className: 'highcharts-menu-item-btn'
        }, null, buttonWrapper);


        // submenu
        if (items && items.length > 1) {

            // arrow is a hook to show / hide submenu
            submenuArrow = createElement(SPAN, {
                className: 'highcharts-submenu-item-arrow'
            }, null, buttonWrapper);

            // replace with arrow background (add it in CSS class)
            submenuArrow.innerHTML = '>';
        } else {
            mainButton.style['background-image'] = options.symbol;
        }

        // TODO: add icons!!!
        if (options === 'separator') {
            css(mainButton, {
                height: '25px',
                cursor: 'default',
                'text-align': 'center'
            });
            // TODO: replace with icon
            mainButton.innerHTML = '. . .';
        }

        return {
            buttonWrapper: buttonWrapper,
            mainButton: mainButton,
            submenuArrow: submenuArrow
        };
    },
    /*
     * Create navigation's HTML elements: container and arrows.
     *
     */
    addNavigation: function () {
        var stockToolbar = this,
            wrapper = stockToolbar.wrapper;

        // arrow wrapper
        stockToolbar.arrowWrapper = createElement(DIV, {
            className: 'highcharts-arrow-wrapper'
        });

        // arrow scrolls top
        stockToolbar.arrowUp = createElement(SPAN, {
            className: 'highcharts-arrow-up',
            innerHTML: '&rsaquo;'
        }, null, stockToolbar.arrowWrapper);

        // arrow scrolls down
        stockToolbar.arrowDown = createElement(SPAN, {
            className: 'highcharts-arrow-down',
            innerHTML: '&lsaquo;'
        }, null, stockToolbar.arrowWrapper);

        wrapper.insertBefore(
            stockToolbar.arrowWrapper,
            wrapper.childNodes[0]
        );

        // attach scroll events
        stockToolbar.scrollButtons();
    },
    /*
     * Add events to navigation (two arrows) which allows user to scroll
     * top/down GUI buttons, if container's height is not enough.
     *
     */
    scrollButtons: function () {
        var stockToolbar = this,
            targetY = 0,
            step = 0.2 * stockToolbar.wrapper.offsetHeight; // 0.1 = 20%

        addEvent(this.arrowUp, 'click', function () {
            if (targetY > 0) {
                targetY -= step;
                stockToolbar.toolbar.style['margin-top'] = -targetY + 'px';
            }
        });

        addEvent(this.arrowDown, 'click', function () {
            if (
                stockToolbar.wrapper.offsetHeight + targetY <=
                stockToolbar.toolbar.offsetHeight
            ) {
                targetY += step;
                stockToolbar.toolbar.style['margin-top'] = -targetY + 'px';
            }
        });
    },
    /*
     * Create stockTools HTML main elements.
     *
     */
    createHTML: function () {
        var stockToolbar = this,
            chart = stockToolbar.chart,
            guiOptions = stockToolbar.options,
            container = chart.container.parentNode,
            listWrapper,
            toolbar,
            wrapper;

        // create main container
        stockToolbar.wrapper = wrapper = createElement(DIV, {
            className: 'highcharts-stocktools-wrapper ' +
                    guiOptions.className
        });
        container.parentNode.insertBefore(wrapper, container);
        wrapper.appendChild(container);

        // toolbar
        stockToolbar.toolbar = toolbar = createElement(UL, {
            className: 'highcharts-stocktools-toolbar ' +
                    guiOptions.toolbarClassName
        });

        // add container for list of buttons
        stockToolbar.listWrapper = listWrapper = createElement(DIV, {
            className: 'highcharts-menu-wrapper'
        });

        wrapper.insertBefore(listWrapper, wrapper.childNodes[0]);
        listWrapper.insertBefore(toolbar, listWrapper.childNodes[0]);

        // Show hide toolbar
        stockToolbar.showHideToolbar();

        // add navigation which allows user to scroll down / top GUI buttons
        stockToolbar.addNavigation();
    },
    /*
     * Redraw, GUI requires to verify if the navigation should be visible.
     *
     */
    redraw: function () {
        this.showHideNavigatorion();
    },
    /*
     * Function called in redraw verifies if the navigation should be visible.
     *
     */
    showHideNavigatorion: function () {
        // arrows
        // 50px space for arrows
        if (
            this.visible &&
            this.toolbar.offsetHeight > (this.wrapper.offsetHeight - 50)
        ) {
            this.arrowWrapper.style.display = 'block';
        } else {
            this.arrowWrapper.style.display = 'none';
        }
    },
    /*
     * Create button which shows or hides GUI toolbar.
     *
     */
    showHideToolbar: function () {
        var stockToolbar = this,
            wrapper = stockToolbar.wrapper,
            toolbar = doc.getElementsByClassName('highcharts-menu-wrapper')[0],
            submenus = doc.getElementsByClassName('highcharts-submenu'),
            showhideBtn;

        // create show / hide button
        showhideBtn = createElement(DIV, {
            className: 'highcharts-showhide-showbar'
        }, null, wrapper);

        // replace by icon
        showhideBtn.innerHTML = '<';

        // toggle menu
        addEvent(showhideBtn, 'click', function () {
            if (toolbar.className.indexOf('highcharts-hide') >= 0) {
                toolbar.classList.remove('highcharts-hide');

                each(submenus, function (submenu) {
                    submenu.style.display = 'block';
                });

                showhideBtn.innerHTML = '<';
                stockToolbar.visible = true;
            } else {
                toolbar.className += ' highcharts-hide';
                // hide all submenu items
                each(submenus, function (submenu) {
                    submenu.style.display = 'none';
                });

                showhideBtn.innerHTML = '>';
                stockToolbar.visible = false;
            }
        });
    },
    /*
     * In main GUI button, replace icon and class with submenu button's
     * class / symbol.
     *
     * @param {HTMLDOMElement} - submenu button
     * @param {Boolean} - true or false
     *
     */
    switchSymbol: function (button, redraw) {
        var buttonWrapper = button.parentNode,
            buttonWrapperClass = buttonWrapper.classList.value,
            // main button in first level og GUI
            mainNavButton = buttonWrapper.parentNode.parentNode;

        // set class
        mainNavButton.classList = buttonWrapperClass;

        // set icon
        mainNavButton.querySelectorAll('.highcharts-menu-item-btn')[0]
            .style['background-image'] = button.style['background-image'];

        // set active class
        if (redraw) {
            this.selectButton(mainNavButton);
        }
    },
    /*
     * Set select state (active class) on button.
     *
     * @param {HTMLDOMElement} - button
     *
     */
    selectButton: function (btn) {
        if (btn.className.indexOf(activeClass) >= 0) {
            btn.classList.remove(activeClass);
        } else {
            btn.className += ' ' + activeClass;
        }
    },
    /*
     * Remove active class from all buttons except defined.
     *
     * @param {HTMLDOMElement} - button which should not be deactivated
     *
     */
    unselectAllButtons: function (btn) {
        var activeButtons = btn.parentNode.querySelectorAll('.' + activeClass);

        each(activeButtons, function (activeBtn) {
            if (activeBtn !== btn) {
                activeBtn.classList.remove(activeClass);
            }
        });
    },
    /*
     * Show popup.
     *
     * @param {String} - type of popup (indicator, annotation)
     * @param {Function} - callback called when user clicks on button in popup
     *
     */
    showForm: function (type, callback) {
        H.Popup.prototype.showForm(type, this.chart, callback);
    },
    /*
     * Destroy all HTML GUI elements.
     *
     */
    destroy: function () {
        var chartContainer = this.chart.renderTo,
            stockToolsDiv = this.wrapper,
            // Get the element's parent node
            parent = stockToolsDiv.parentNode;

        // Move all children out of the element
        while (stockToolsDiv.firstChild) {
            if (stockToolsDiv.firstChild === chartContainer) {
                parent.insertBefore(stockToolsDiv.firstChild, stockToolsDiv);
            } else {
                stockToolsDiv.firstChild.remove();
            }
        }
        // Remove the empty element
        parent.removeChild(stockToolsDiv);
    },
    /*
     * Mapping JSON fields to CSS classes.
     *
     */
    classMapping: {
        circle: 'highcharts-circle-annotation',
        rectangle: 'highcharts-rectangle-annotation',
        label: 'highcharts-label-annotation',
        segment: 'highcharts-segment',
        arrowSegment: 'highcharts-arrow-segment',
        ray: 'highcharts-ray',
        arrowRay: 'highcharts-arrow-ray',
        line: 'highcharts-infinity-line',
        arrowLine: 'highcharts-arrow-infinity-line',
        verticalLine: 'highcharts-vertical-line',
        horizontalLine: 'highcharts-horizontal-line',
        crooked3: 'highcharts-crooked3',
        crooked5: 'highcharts-crooked5',
        elliott3: 'highcharts-elliott3',
        elliott5: 'highcharts-elliott5',
        pitchfork: 'highcharts-pitchfork',
        fibonacci: 'highcharts-fibonacci',
        'parallel-channel': 'highcharts-parallel-channel',
        measureX: 'highcharts-measureX',
        measureY: 'highcharts-measureY',
        measureXY: 'highcharts-measureXY',
        verticalCounter: 'highcharts-vertical-counter',
        verticalLabel: 'highcharts-vertical-label',
        verticalArrow: 'highcharts-vertical-arrow',
        verticalDoubleArrow: 'highcharts-vertical-double-arrow',
        currentPriceIndicator: 'highcharts-current-price-indicator',
        indicators: 'highcharts-indicators',
        flagCirclepin: 'highcharts-flag-circlepin',
        flagDiamondpin: 'highcharts-flag-diamondpin',
        flagSquarepin: 'highcharts-flag-squarepin',
        flagSimplepin: 'highcharts-flag-simplepin',
        zoomX: 'highcharts-zoom-x',
        zoomY: 'highcharts-zoom-y',
        zoomXY: 'highcharts-zoom-xy',
        typeLine: 'highcharts-series-type-line',
        typeOHLC: 'highcharts-series-type-ohlc',
        typeCandlestick: 'highcharts-series-type-candlestick',
        toggleAnnotations: 'highcharts-toggle-annotations',
        saveChart: 'highcharts-save-chart'
    }
};