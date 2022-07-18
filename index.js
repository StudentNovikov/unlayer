unlayer.init({
    id: 'editor-container',
    projectId: 1234,
    displayMode: 'email'
  })

const savedDesign = {
    "counters": {
        "u_column": 2,
        "u_row": 2,
        "u_content_heading": 1,
        "u_content_html": 1,
        "u_content_image": 1,
        "u_content_menu": 1,
        "u_content_button": 1
    },
    "body": {
        "id": "ImyXYeOJ4F",
        "rows": [
            {
                "id": "-LiRIuxRQV",
                "cells": [
                    1
                ],
                "columns": [
                    {
                        "id": "KfaHoFrAJR",
                        "contents": [
                            {
                                "id": "-MGc5CYQ2l",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "headingType": "h1",
                                    "fontFamily": {
                                        "label": "Arial",
                                        "value": "arial,helvetica,sans-serif"
                                    },
                                    "fontSize": "22px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_1",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "Heading"
                                }
                            },
                            {
                                "id": "hkvKqycAAB",
                                "type": "html",
                                "values": {
                                    "html": "<strong>Hello, world!</strong>",
                                    "displayCondition": null,
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "_meta": {
                                        "htmlID": "u_content_html_1",
                                        "htmlClassNames": "u_content_html"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }
                        ],
                        "values": {
                            "backgroundColor": "",
                            "padding": "0px",
                            "border": {},
                            "_meta": {
                                "htmlID": "u_column_1",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }
                ],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_1",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            },
            {
                "id": "g4-RshQQ1W",
                "cells": [
                    1
                ],
                "columns": [
                    {
                        "id": "G8RV-TL8-q",
                        "contents": [
                            {
                                "id": "KyXCe9j_7g",
                                "type": "menu",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "menu": {
                                        "items": [
                                            {
                                                "key": "1658147323642",
                                                "text": "Page",
                                                "link": {
                                                    "name": "web",
                                                    "values": {
                                                        "href": "",
                                                        "target": "_self"
                                                    }
                                                }
                                            },
                                            {
                                                "key": "1658147327898",
                                                "text": "menu",
                                                "link": {
                                                    "name": "web",
                                                    "values": {
                                                        "href": "",
                                                        "target": "_self"
                                                    }
                                                }
                                            },
                                            {
                                                "key": "1658147335334",
                                                "text": "link",
                                                "link": {
                                                    "name": "web",
                                                    "values": {
                                                        "href": "",
                                                        "target": "_self"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "fontFamily": {
                                        "label": "Arial",
                                        "value": "arial,helvetica,sans-serif"
                                    },
                                    "fontSize": "14px",
                                    "textColor": "#843fa1",
                                    "linkColor": "#0068A5",
                                    "align": "center",
                                    "layout": "horizontal",
                                    "separator": "",
                                    "padding": "5px 15px",
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_menu_1",
                                        "htmlClassNames": "u_content_menu"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            },
                            {
                                "id": "xvPARlqpGE",
                                "type": "button",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "href": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "buttonColors": {
                                        "color": "#FFFFFF",
                                        "backgroundColor": "#3AAEE0",
                                        "hoverColor": "#FFFFFF",
                                        "hoverBackgroundColor": "#3AAEE0"
                                    },
                                    "size": {
                                        "autoWidth": true,
                                        "width": "100%"
                                    },
                                    "textAlign": "center",
                                    "lineHeight": "120%",
                                    "padding": "10px 20px",
                                    "border": {},
                                    "borderRadius": "4px",
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_button_1",
                                        "htmlClassNames": "u_content_button"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<span style=\"font-size: 14px; line-height: 16.8px;\">Button Text</span>",
                                    "calculatedWidth": 110,
                                    "calculatedHeight": 37
                                }
                            }
                        ],
                        "values": {
                            "backgroundColor": "",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_2",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }
                ],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "padding": "0px",
                    "anchor": "",
                    "_meta": {
                        "htmlID": "u_row_2",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }
        ],
        "values": {
            "popupPosition": "center",
            "popupWidth": "600px",
            "popupHeight": "auto",
            "borderRadius": "10px",
            "contentAlign": "center",
            "contentVerticalAlign": "center",
            "contentWidth": "500px",
            "fontFamily": {
                "label": "Arial",
                "value": "arial,helvetica,sans-serif"
            },
            "textColor": "#000000",
            "popupBackgroundColor": "#FFFFFF",
            "popupBackgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": false,
                "center": true,
                "cover": true
            },
            "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
            "popupCloseButton_position": "top-right",
            "popupCloseButton_backgroundColor": "#DDDDDD",
            "popupCloseButton_iconColor": "#000000",
            "popupCloseButton_borderRadius": "0px",
            "popupCloseButton_margin": "0px",
            "popupCloseButton_action": {
                "name": "close_popup",
                "attrs": {
                    "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                }
            },
            "backgroundColor": "#e7e7e7",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": false,
                "center": true,
                "cover": false
            },
            "preheaderText": "",
            "linkStyle": {
                "body": true,
                "linkColor": "#0000ee",
                "linkHoverColor": "#0000ee",
                "linkUnderline": true,
                "linkHoverUnderline": true
            },
            "_meta": {
                "htmlID": "u_body",
                "htmlClassNames": "u_body"
            }
        }
    },
    "schemaVersion": 9
}

document.getElementById('saveDesign').addEventListener('click',()=>{
    unlayer.saveDesign(function(design) {
        // console.log('design', design);
        localStorage.setItem('savedDesign', JSON.stringify(design));
        alert('успешно сохранено')
      });
})

document.getElementById('loadDesign').addEventListener('click',()=>{
    // unlayer.loadDesign(savedDesign);
    if(localStorage.getItem('savedDesign')){
        unlayer.loadDesign(JSON.parse(localStorage.getItem('savedDesign')));
    } else {
        alert('пока нет сохраненных дизайнов')
    }
})