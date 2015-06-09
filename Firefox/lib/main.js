var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var contextMenu = require("sdk/context-menu");

var action_url = "javascript:(function(d,id){var js,fjs=d.getElementsByTagName('head')[0];js=d.createElement('script');js.id=id;js.async=true;js['data-env']='//trove.com';js.src='//d2pe20ur0h0p8p.cloudfront.net/fbt/vendor/editorial/curation_init.js?cb='+new Date().getTime();fjs.parentNode.insertBefore(js,fjs);})(document,'trove_pick_js');";

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./trove_icon_16.png",
    "32": "./trove_icon_48.png",
    "64": "./trove_icon_128.png"
  },
  onClick: handleClick
});

var meanuItem = contextMenu.Item({
  label: "Pick this article",
  contentScript: 'window.location.href ='+ action_url;
});


function handleClick(state) {
  tabs.open(action_url);
}
