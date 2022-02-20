

$(document).on("click", ".general_menu_icon_info_main_wrapper", function(){
    $(this).parent().toggleClass("active");
});


$(document).on("click", ".realtime_gas_prices_nested_menu_wrapper", function(){
    $(this).parent().toggleClass("active");
    $(".money_info_nested_menu").removeClass("active");
    $(".questions_nested_menu ").removeClass("active");
});

$(document).on("click", ".realtime_gas_prices_nested_menu_hidden_div_list_title_img_icon", function(){
    $(this).parent().toggleClass("active");
});

$(document).on("click", ".money_info_nested_menu_title_icon", function(){
    $(this).parent().toggleClass("active");
    $(".realtime_gas_prices_nested_menu ").removeClass("active");
    $(".questions_nested_menu ").removeClass("active");
    
});

$(document).on("click", ".questions_nested_menu_img_icon", function(){
    $(this).parent().toggleClass("active");
    $(".realtime_gas_prices_nested_menu ").removeClass("active");
    $(".money_info_nested_menu").removeClass("active");
});


$(document).on("click", ".realtime_gas_prices_nested_menu_hidden_div_list_child_img_title_icon", function(){
    var val = $(this).data("value");
    var src = $(this).data("src");
    $(".realtime_gas_prices_nested_menu_hidden_div_list_img img").attr("src", src);
    $(".realtime_gas_prices_nested_menu_hidden_div_list_title").html(val);
    $(".realtime_gas_prices_nested_menu_hidden_div_list_child_img_title_icon").removeClass("active");
    $(this).addClass("active");
    $(".realtime_gas_prices_nested_menu_hidden_div_list").removeClass("active");
});

$(document).on("click", ".money_info_nested_menu_hidden_div_item_btn", function(){
    var val = $(this).data("value");
    $(".money_info_nested_menu_title").html(val);
     $(".money_info_nested_menu_hidden_div_item_btn").removeClass("active");
    $(this).addClass("active");
   
})



$(document).on("click", ".all_networks_hidden_div_btn", function(){
    var val = $(this).data("value");
    var src = $(this).data("src");
    $(".all_networks_title_img img").attr("src", src);
    $(".all_networks_title").html(val);
    $(".all_networks_hidden_div_btn").removeClass("open");
    $(this).addClass("open");
    $(this).parent().parent().find(".all_networks_title_img").addClass("open");
    $(".all_networks_wrapper").removeClass("open");
    
   
});

$(document).on("click", ".assets_items_title", function(){

    var data_id = $(this).data("id");
    $(".assets_items_title").removeClass("active");
    $(this).addClass("active");
    
  
  
    $(".assets_item").removeClass("open");
    $("#" + data_id).addClass("open");
  })  


  $(document).on("click", ".all_networks_title_icon_wrapper",function(){
      $(this).parent().toggleClass("open");
  })


  $(document).on("input", ".theme_radio_input_field", function(){
           $(".theme_radio_input").removeClass("active");
            $(this).parent().addClass("active");
          
  });


$(document).on("click", ".language_title_icon_wrapper", function(){
    $(".language_popup").addClass("open");
    $("body").addClass("hidden_body");
})

$(document).on("click", ".language_hidden_div_close_icon", function(){
    $(".language_popup").removeClass("open");
    $("body").removeClass("hidden_body");
})

$(document).on("click", ".language_hidden_div_btn", function(){
     $(".language_hidden_div_btn").removeClass("open");
     $(this).addClass("open");
     $(".language_popup").removeClass("open");
})




$(document).on("click", ".history_calculate_btn", function(){
    $(".calculate_taxes_popup").addClass("open");
    $("body").addClass("hidden_body");
})


$(document).on("click", ".calculate_taxes_popup_close_icon", function(){
    $(".calculate_taxes_popup").removeClass("open");
    $("body").removeClass("hidden_body");
})

$(document).on("click", ".history_main_item_child", function(){
    $(this).parent().find($(".history_main_item_child_hidden_parent")).slideToggle();
    $(this).parent().toggleClass("open");
})

$(document).on("click", ".hamburger-menu-btn", function(){
    $(".mobile_version1").addClass("open");
    $("body").addClass("hidden_body");
    $(this).addClass("open");
});


$(document).on("click", ".mobile_version1_close", function(){
    $(".mobile_version1").removeClass("open");
    $("body").removeClass("hidden_body");
    $(".hamburger-menu-btn").removeClass("open");
});

$(document).on("click", ".mobile_search_form_btn", function(){
    $(".mobile_version2").addClass("open");
    $("body").addClass("hidden_body");
});

$(document).on("click", ".mobile_search_header_form_btn", function(){
    $(".mobile_version2").removeClass("open");
    $("body").removeClass("hidden_body");
});


$(document).on("click", ".wallet_hidden_box_img", function(){
    $(".mobile_version3").addClass("open");
    $("body").addClass("hidden_body");
});

$(document).on("click", ".mobile_version3_close", function(){
    $(".mobile_version3").removeClass("open");
    $("body").removeClass("hidden_body");
});