var job = {
    // add new job form
    add_job:function(){
        
    },
    // init script call on ready state
    init_script:function(){
        $('#job_add_new').unbind();
        $('#job_add_new').bind('click', function(){
            var html = '<div style="margin-top:20px;">'
                    + '<div>'
                        + '<div class="form_lable01">Name</div>'
                        + '<input class="form_field01" style="width:360px;" placeholder="Name">'
                        + '<div class="clear"></div>'
                    + '</div>'
                    + '<div>'
                        + '<div class="form_lable01">Command</div>'
                        + '<input class="form_field01" style="width:360px;" placeholder="rm -f /var/log/apache/error.log">'
                        + '<div class="clear"></div>'
                    + '</div>'
                    + '<div style="width:100%;margin:auto;margin-top:20px;">'
                        + '<button id="schedule_month_select" class="btn_left01_with_margin_selected scheduler_selection_menu">Month</button>'
                        + '<button id="schedule_day_select" class="btn_left01_with_margin scheduler_selection_menu">Day of Month</button>'
                        + '<button id="schedule_dow_select" class="btn_left01_with_margin scheduler_selection_menu">Day of Week</button>'
                        + '<button id="schedule_hour_select" class="btn_left01_with_margin scheduler_selection_menu">Hour</button>'
                        + '<button id="schedule_min_select" class="btn_left01_with_margin scheduler_selection_menu">Minute</button>'
                        + '<div class="clear"></div>'
                    + '</div>'
                    + '<div id="scheduler_selection" style="margin-top:20px;"></div>'
                    + '<div style="margin-top:30px;padding:10px;">'
                        + '<button id="job_add_new_dialog_close" class="btn_left01">Close</button>'
                        + '<button id="job_add_new_dialog_accept" class="btn_right01">Add</button>'
                        + '<div class="clear"></div>'
                    + '</div>'
                + '</div>';
            util.show_dialog({
                id:'job_add_new_dialog',
                title:'Add New Job',
                content:html,
                width:480,
                top:10,
                close_onclick:false,
                callback:function(){
                    $('#schedule_month_select').unbind();
                    $('#schedule_month_select').bind('click', function(){
                        $('.scheduler_selection_menu').switchClass('btn_left01_with_margin_selected', 'btn_left01_with_margin', 0);
                        $('#schedule_month_select').switchClass('btn_left01_with_margin', 'btn_left01_with_margin_selected', 0);
                        var scheduler_selection = $('#scheduler_selection');
                        scheduler_selection.empty();
                        
                        $.each(util.month_array(), function(k, v){
                            var item = $('<button class="btn_left02_with_margin" style="width:70px;">' + v.name + '</button>');
                            item.unbind();
                            item.bind('click', function(){
                                util.togle_btn_class(item);
                            });
                            scheduler_selection.append(item);
                        });
                        
                        scheduler_selection.append('<div class="clear"></div>');
                    });
                    
                    $('#schedule_day_select').unbind();
                    $('#schedule_day_select').bind('click', function(){
                        $('.scheduler_selection_menu').switchClass('btn_left01_with_margin_selected', 'btn_left01_with_margin', 0);
                        $('#schedule_day_select').switchClass('btn_left01_with_margin', 'btn_left01_with_margin_selected', 0);
                        var scheduler_selection = $('#scheduler_selection');
                        scheduler_selection.empty();
                        
                        $.each(util.range(1, 31), function(k, v){
                            var item = $('<button class="btn_left02_with_margin" style="width:30px;">' + v + '</button>');
                            item.unbind();
                            item.bind('click', function(){
                                util.togle_btn_class(item);
                            });
                            scheduler_selection.append(item);
                        });
                        
                        scheduler_selection.append('<div class="clear"></div>');
                    });
                    
                    $('#schedule_dow_select').unbind();
                    $('#schedule_dow_select').bind('click', function(){
                        $('.scheduler_selection_menu').switchClass('btn_left01_with_margin_selected', 'btn_left01_with_margin', 0);
                        $('#schedule_dow_select').switchClass('btn_left01_with_margin', 'btn_left01_with_margin_selected', 0);
                        var scheduler_selection = $('#scheduler_selection');
                        scheduler_selection.empty();
                        
                        $.each(util.weekday_array(), function(k, v){
                            var item = $('<button class="btn_left02_with_margin" style="width:70px;">' + v.name + '</button>');
                            item.unbind();
                            item.bind('click', function(){
                                util.togle_btn_class(item);
                            });
                            scheduler_selection.append(item);
                        });
                        
                        scheduler_selection.append('<div class="clear"></div>');
                    });
                    
                    $('#schedule_hour_select').unbind();
                    $('#schedule_hour_select').bind('click', function(){
                        $('.scheduler_selection_menu').switchClass('btn_left01_with_margin_selected', 'btn_left01_with_margin', 0);
                        $('#schedule_hour_select').switchClass('btn_left01_with_margin', 'btn_left01_with_margin_selected', 0);
                        var scheduler_selection = $('#scheduler_selection');
                        scheduler_selection.empty();
                        
                        $.each(util.range(0, 23), function(k, v){
                            var item = $('<button class="btn_left02_with_margin" style="width:30px;">' + v + '</button>');
                            item.unbind();
                            item.bind('click', function(){
                                util.togle_btn_class(item);
                            });
                            scheduler_selection.append(item);
                        });
                        
                        scheduler_selection.append('<div class="clear"></div>');
                    });
                    
                    $('#schedule_min_select').unbind();
                    $('#schedule_min_select').bind('click', function(){
                        $('.scheduler_selection_menu').switchClass('btn_left01_with_margin_selected', 'btn_left01_with_margin', 0);
                        $('#schedule_min_select').switchClass('btn_left01_with_margin', 'btn_left01_with_margin_selected', 0);
                        var scheduler_selection = $('#scheduler_selection');
                        scheduler_selection.empty();
                        
                        $.each(util.range(0, 59), function(k, v){
                            var item = $('<button class="btn_left02_with_margin" style="width:30px;">' + v + '</button>');
                            item.unbind();
                            item.bind('click', function(){
                                util.togle_btn_class(item);
                            });
                            scheduler_selection.append(item);
                        });
                        
                        scheduler_selection.append('<div class="clear"></div>');
                    });
            
                    $('#schedule_month_select').click();
                }
            });
            
            $('#job_add_new_dialog_close').unbind();
            $('#job_add_new_dialog_close').bind('click', function(){
                util.destroy_dialog('job_add_new_dialog');
            });
        });
    }
}

var util = {
    // show dialog form
    // general form
    // config must be in javascript object
    // {title:'', content:'', id:''}
    show_dialog:function(config){
        var width = 100;
        var height = '';
        var top = 100;
        
        if('width' in config){
            width = config.width;
        }
        
        if('height' in config){
            height = config.height;
        }
        
        if('top' in config){
            top = config.top;
        }
        
        var close_dialog = true;
        if('close_onclick' in config){
            close_dialog = config.close_onclick;
        }
        
        var html = '<div id="' + config.id + '_overlay">' + '</div>'
            + '<div id="' + config.id + '">'
            + '<div id="' + config.id + '_title">' + config.title +'</div>'
            + config.content
            + '</div>';
        
        $('html').append(html);
        
        $('#' + config.id).css({
            'position':'absolute',
            'padding':'10px',
            'left':'0px',
            'right':'0px',
            'top':top + 'px',
            'width':width + 'px',
            'height':height + 'px',
            'border-radius':'5px',
            'background':'#FFFFFF',
            'margin':'auto'});
            
        $('#' + config.id + '_title').css({
            'font-weight':'600',
            'font-size':'14pt',
            'border-bottom':'solid 1px #d8d8d8',
            'padding':'10px'
        });
        
        $('#' + config.id + '_overlay').css({
            'position':'absolute',
            'top':'0px',
            'left':'0px',
            'width':'100%',
            'height':'100%',
            'background':'#333333',
            'opacity':'0.8'
        });
        
        if(close_dialog){
            $('#' + config.id + '_overlay').unbind();
            $('#' + config.id + '_overlay').bind('click', function(){
                util.destroy_dialog(config.id);
            });
        }
        
        // callback after dialog show
        if('callback' in config){
            if(typeof(config.callback) == 'function'){
                config.callback();
            }
        }
    },
    destroy_dialog:function(id){
        $('#' + id + '_overlay').remove();
        $('#' + id).remove();
    },
    month_array:function(){
        return {
            jan:{
                short_name:'Jan',
                name:'January',
                day:31,
                index:1
            },
            feb:{
                short_name:'Feb',
                name:'February',
                day:29,
                index:2
            },
            mar:{
                short_name:'Mar',
                name:'March',
                day:31,
                index:3
            },
            Apr:{
                short_name:'Apr',
                name:'April',
                day:30,
                index:4
            },
            May:{
                short_name:'May',
                name:'May',
                day:31,
                index:5
            },
            jun:{
                short_name:'Jun',
                name:'Juny',
                day:30,
                index:6
            },
            jul:{
                short_name:'Jul',
                name:'July',
                day:31,
                index:7
            },
            aug:{
                short_name:'Aug',
                name:'August',
                day:31,
                index:8
            },
            sept:{
                short_name:'Sept',
                name:'September',
                day:30,
                index:9
            },
            oct:{
                short_name:'Oct',
                name:'Oktober',
                day:31,
                index:10
            },
            nov:{
                short_name:'Nov',
                name:'November',
                day:30,
                index:11
            },
            dec:{
                short_name:'Dec',
                name:'December',
                day:31,
                index:12
            }
        }
    },
    weekday_array:function(){
        return {
            sun:{
                short_name:'Sun',
                name:'Sunday',
                index:0
            },
            mon:{
                short_name:'Mon',
                name:'Monday',
                index:1
            },
            tue:{
                short_name:'Tue',
                name:'Tuesday',
                index:2
            },
            wed:{
                short_name:'Wed',
                name:'Wednesday',
                index:3
            },
            thu:{
                short_name:'Thu',
                name:'Thursday',
                index:4
            },
            fri:{
                short_name:'Fri',
                name:'Friday',
                index:5
            },
            sat:{
                short_name:'Sat',
                name:'Saturday',
                index:6
            }
        }
    },
    is_leap_year:function(){
        var year = new Date().getFullYear();
        var is_leap = false;
        if(year%4 == 0){
            if(year%100 == 0){
                if(year%400 == 0){
                    is_leap = true;
                }
            }else{
                is_leap = true;
            }
        }
        
        return is_leap;
    },
    range:function(start, end, step){
        var range = [];
        var typeofStart = typeof start;
        var typeofEnd = typeof end;
    
        if (step === 0) {
            throw TypeError("Step cannot be zero.");
        }
    
        if (typeofStart == "undefined" || typeofEnd == "undefined") {
            throw TypeError("Must pass start and end arguments.");
        } else if (typeofStart != typeofEnd) {
            throw TypeError("Start and end arguments must be of same type.");
        }
    
        typeof step == "undefined" && (step = 1);
    
        if (end < start) {
            step = -step;
        }
    
        if (typeofStart == "number") {
    
            while (step > 0 ? end >= start : end <= start) {
                range.push(start);
                start += step;
            }
    
        } else if (typeofStart == "string") {
    
            if (start.length != 1 || end.length != 1) {
                throw TypeError("Only strings with one character are supported.");
            }
    
            start = start.charCodeAt(0);
            end = end.charCodeAt(0);
    
            while (step > 0 ? end >= start : end <= start) {
                range.push(String.fromCharCode(start));
                start += step;
            }
    
        } else {
            throw TypeError("Only string and number types are supported");
        }
    
        return range;
    },
    togle_btn_class:function(element){
        var item_selected = element.attr('class');
        var new_item_selected = '';
        if(item_selected.search('_selected') == -1){
            new_item_selected = item_selected + '_selected';
        }else{
            new_item_selected = item_selected.replace('_selected', '');
        }
                                
        element.switchClass(item_selected, new_item_selected, 0);
    }
}