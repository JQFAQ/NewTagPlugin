(function ($) {
    $.widget("radiantq.NewTagPlugin", {
        options: {
            toolTipContent: function () { }
        },
        TimeSpan: null,
        children: null,
        _create: function () {
            var $element = this.element;
            this.TimeSpan = $element[0].attributes['freshTimeSpan'].value;
            var childrens = $element[0].children.length;
            this._parse(childrens)
        },
        _parse: function (childrens) {
            for (var i = 0; i < childrens; i++) {
                this.children = this.element[0].children[i];
                if ($(this.children).is('[updated_date]')) {
                    var element = this.children;
                    var value = element.attributes['updated_date'].value;
                    this._marknewitem(new Date(value));
                }
            }
        },
        _marknewitem: function (value) {
            var newDate = new Date();
            if (this.TimeSpan < 0) {
                var today = new Date();
                newDate.setDate(today.getDate() - 30);
            } else {
                newDate = this._getParentDate();
            }
            var today = new Date();
            var diff = (value > newDate && value < today);
            if (diff) {
                this._append();
            }
        },
        _append: function () {
            var item = this.children;
            $(item).append('<img src="http://www1.ccny.cuny.edu/facultystaff/hr/images/star_1.jpg" style="margin-left:3px; height:15px; width:15px;"/>');

            var self = this;
            $(item).tooltip({
                items: "img",
                content: function () {
                    return self.options.toolTipContent($(this).parent().parent());
                }
            });
        },
        _getParentDate: function () {
            var today = new Date();
            var parentDate = new Date();
            var timeSpan = this.TimeSpan;
            var value = timeSpan.split(".");
            var days = value[0];
            var hours = value[1];
            parentDate.setDate(today.getDate() - days);
            var time = today.getHours();
            var newTime = time - hours;
            parentDate.setHours(+newTime, 0, 0, 0);
            return parentDate;
        }
    });
})(jQuery);
