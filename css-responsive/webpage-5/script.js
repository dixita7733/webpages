 $(document).ready(function() {
    

        $(".Box1-main").click(function() {
            $(".page-1").hide();
            $(".page-2").show();
        });

        $(".Box2-main").click(function() {
            $(".page-1").hide();
            $(".page-2").show();
        });

        $(".Box3-main").click(function() {
            $(".page-1").hide();
            $(".page-2").show();
        });

        $(".Box4-main").click(function() {
            $(".page-1").hide();
            $(".page-2").show();
        });

        $(".Box1-page2").click(function() {
            $(".page-1, .page-2").hide();
            $(".page-3").show();
        });

        $(".Box2-page2").click(function() {
            $(".page-1, .page-2").hide();
            $(".page-12").show();
        });
        // Show continue button when input field on page 3 has value
        $("#page-3-1-item-1").on("input", function() {
            if ($(this).val().trim() !== "") {
                $(".continue-page3").show();
            } else {
                $(".continue-page3").hide();
            }
        });

        $(".page-13-continuebox").on("input", function() {
            if ($(this).val().trim() !== "") {
                $(".continue-page13").show();
            } else {
                $(".continue-page13").hide();
            }
        });
        
        
        $(".page-14-continuebox").on("input", function() {
            if ($(this).val().trim() !== "") {
                $(".continue-page14").show();
            } else {
                $(".continue-page14").hide();
            }
        });

        $("#page-12-1-item-1").on("input", function() {
            if ($(this).val().trim() !== "") {
                $(".continue-page12").show();
            } else {
                $(".continue-page12").hide();
            }
        });

        // Show continue button on page 4 when input field has value
        $("#page-4-item-1").on("input", function() {
            if ($(this).val().trim() !== "") {
                $(".continue-page4").show();
            } else {
                $(".continue-page4").hide();
            }
        });

        // Show continue button on page 4 when input field has value
        $(".page-15-continuebox").on("input", function() {
            if ($(this).val().trim() !== "") {
                $(".continue-page15").show();
            } else {
                $(".continue-page15").hide();
            }
        });

        // Show page 5 and hide page 4 when continue button on page 4 is clicked
        $(".continue-page4").click(function() {
            $(".page-4").hide();
            $(".page-5").show();
        });

        // Show page 4 and hide page 3 when continue button on page 3 is clicked
        $(".continue-page3").click(function() {
            $(".page-3").hide();
            $(".page-4").show();
        });

        // 'single' is clicked
        $(".single").click(function() {
            $(".page-5").hide();
            $(".page-6").show();
        });

        $(".page-6-continue-button").click(function() {
            $(".page-6").hide();
            $(".page-7").show();
        });

        $(".page-7-continue-button").click(function() {
            $(".page-7").hide();
            $(".page-8").show();
        });

        // 'single' is clicked
         $(".split").click(function() {
            $(".page-5").hide();
            $(".page-9").show();
        });

        $(".page-9-continue-button").click(function() {
            $(".page-9").hide();
            $(".page-10").show();
        });

        $(".page-10-continue-button").click(function() {
            $(".page-10").hide();
            $(".page-11").show();
        });

        $(".continue-page12").click(function() {
            $(".page-12").hide();
            $(".page-13").show();
        });

        $(".continue-page13").click(function() {
            $(".page-13").hide();
            $(".page-14").show();
        });

        $(".continue-page14").click(function() {
            $(".page-14").hide();
            $(".page-15").show();
        });
        $(".continue-page15").click(function() {
            $(".page-15").hide();
            $(".page-5").show();
        });

        $("#back-2").click(function(){
          $(".page-2").hide();
          $(".page-1").show();
        })
        $("#back-3").click(function(){
            $(".page-3").hide();
            $(".page-2").show();
          })
        $("#back-4").click(function(){
            $(".page-4").hide();
            $(".page-3").show();
          })
        $("#back-5").click(function(){
            $(".page-5").hide();
            $(".page-4").show();
          })
        $("#back-6").click(function(){
            $(".page-6").hide();
            $(".page-5").show();
          })
        $("#back-7").click(function(){
            $(".page-7").hide();
            $(".page-6").show();
          })
        $("#back-8").click(function(){
            $(".page-8").hide();
            $(".page-7").show();
          });
        $("#back-9").click(function(){
            $(".page-9").hide();
            $(".page-5").show();
          });
          $("#back-10").click(function(){
            $(".page-10").hide();
            $(".page-9").show();
          });
          $("#back-11").click(function(){
            $(".page-11").hide();
            $(".page-10").show();
          });
          $("#back-12").click(function(){
            $(".page-12").hide();
            $(".page-2").show();
          })
          $("#back-13").click(function(){
            $(".page-13").hide();
            $(".page-12").show();
          });
          $("#back-14").click(function(){
            $(".page-14").hide();
            $(".page-13").show();
          });

          $(".continue-page15").click(function(){
            $("#back-5").hide();
            $("#back-15").show();
          })
          $("#back-15pro").click(function(){
            $(".page-15").hide();
            $(".page-14").show();
          })

          $("#back-15").click(function(){
            $(".page-5").hide();
            $(".page-15").show();
          });

            $('.Box1-content').click(function(){
                $('.header').append('Grommet');
            });

            $('.Box1-page2').click(function(){
                $('.yesno').append('Yes');
            });

            $('.Box2-page2').click(function(){
                $('.yesno').append('No');
            });

            $(document).ready(function(){
                $('.continue-page3').click(function(){
                    var inputValue = $('#page-3-1-item-1').val();
                    
                    $('.coveragenum').append( inputValue + ' ' + 'inches');
                });
            });

            $(document).ready(function(){
                $('.continue-page4').click(function(){
                    var inputValue = $('#page-4-item-1').val();
                    
                    $('.coveragelength').append( inputValue + ' ' + 'inches');
                });
            });

            $(document).ready(function(){
                var totalValue = 0; // Variable to store the total value
                
                $('.continue-page12').click(function(){
                    var inputValue = parseInt($('#page-12-1-item-1').val());
                    
                    // Check if inputValue is a valid number
                    if (!isNaN(inputValue)) {
                        totalValue += inputValue; // Add inputValue to totalValue
                        $('.coveragenum').text(totalValue + ' ' + 'inches'); // Display the totalValue
                    }
                });
            
                $('.continue-page13').click(function(){
                    var inputValue1 = parseInt($('#page-13-1-item-1').val());
                    var inputValue2 = parseInt($('#page-13-1-item-2').val());
                    
                    // Check if both input values are valid numbers
                    if (!isNaN(inputValue1) && !isNaN(inputValue2)) {
                        totalValue += inputValue1 + inputValue2; // Add both input values to totalValue
                        $('.coveragenum').text(totalValue + ' ' + 'inches'); // Display the totalValue
                    }
                });
            });

            $(document).ready(function(){
                var totalValue = 0; // Variable to store the total value
                
                // Event handler for the first box
                $('.continue-page14').click(function(){
                    var inputValue = parseInt($('#page-13-1-item-3').val());
                    
                    // Check if inputValue is a valid number
                    if (!isNaN(inputValue)) {
                        totalValue = inputValue; // Set totalValue to inputValue
                        $('.coveragelength').text(totalValue + ' ' + 'inches'); // Display the totalValue

                    }
                });
            
                // Event handler for the second box
                $('.continue-page15').click(function(){
                    var inputValue1 = parseInt($('#page-15-1-item-1').val());
                    
                    // Check if inputValue1 is a valid number
                    if (!isNaN(inputValue1)) {
                        totalValue += inputValue1; // Add inputValue1 to totalValue
                        $('.coveragelength').text(totalValue + ' ' + 'inches'); // Display the totalValue
                    }
                });
            });
            
            
            
            

            $(document).ready(function(){
            $('.single').click(function(){
                $('.singlesplit').append('Single');
            });
        });

            $(document).ready(function(){
            $('.split').click(function(){
                $('.singlesplit').append('Split');
            });
        });
       
            $('.page-6-continue-button').click(function(){
                $('.fullness').append('1.5x Fullness');
            });

            $('.page-9-continue-button').click(function(){
                $('.fullness').append('2x Fullness');
            });
            
            $('.page-7-continue-button, .page-10-continue-button').click(function(){
                $('.bott').append('1/2" Above Floor');
            });   
    });
