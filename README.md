NewTagPlugin
============

This NewTagPluginwidget, which provides an easy way to differentiate newly added items from the old items.
This widget will parse through the entire Parent element,and look for elements with the updated_date attribute.If the updated_date  value was within the "freshTimeSpan" value means it will add a "New" icon-image to the items .

<strong>Getting Started</strong>

Add an parent element to your html which can have more than one children with the custom attributes. <ul> is just an example, it could be any DOM element.
`````javascript
<ul class=”common” freshTimeSpan=" 6.08">
  <li updated_date=" 02/05/2013">Content goes here</li>
  <li updated_date=" 02/01/2013 01:00:00">Content</li>
</ul>
`````
	“freshTimeSpan” is the custom attribute of the parent and the value must be like above, it means 6 days and 8 hours.

	“updated_date” is the custom attribute of the child and the value must be a date. The value can be any format.

Create the above parent to mark the newly added items, as follows:

$(document).ready(function() { $('.common).NewTagPlugin (); });

<strong>TooltipContent Option</strong>

The NewTagPlugin option allows you to change the tooltip content, what should be displayed in tooltip. If you want you can change the tool tip content based on the element.
`````javascript
$('.common).NewTagPlugin ({
         toolTipContent: function (element/*this will return the parent element*/) {
                    var id = element.attr('id');
                    if (id == 'ProjectGantt') {
                        return 'newly added Project Gantt items'
                    }
                    else if (id == 'FlexyGantt') {
                        return 'newly added Flaxy Gantt items'
                    }
                }
 });
`````
<strong>Sponsored By</strong><div><a href="http://radiantq.com/"><img src="http://jqfaq.com/wp-content/uploads/banner_468x60.jpg"</a></div>
