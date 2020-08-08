function fullPage() {
  $("#fullpage").fullpage({
    easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    scrollingSpeed: 1e3,
    anchors: ["top", "portfolio", "about", "contact"],
    navigation: !0,
    navigationPosition: "left",
    animateAnchor: !1,
    onLeave: function(index, nextIndex, direction) {
      if(state==0){
      switch(index){
        case 1:
        anime.timeline().add({
          targets: ".design",
          translateX: "180%",
          duration: 500,
          easing: "easeInOutCubic"
        });
        break;
        case 2:
        anime.timeline().add({
          targets: ".js-letter2",
          translateX: "-105%",
          duration: 500,
          easing: "easeInOutCubic",
          delay: function(el, i) {
            return 60 * i
          }
        });
        break;
        case 3:
        anime.timeline().add({
          targets: ".js-letter3",
          translateX: "-105%",
          duration: 500,
          easing: "easeInOutCubic",
          delay: function(el, i) {
            return 60 * i
          }
        });
        break;
        case 4:
        anime.timeline().add({
          targets: ".js-letter4",
          translateX: "-105%",
          duration: 500,
          easing: "easeInOutCubic",
          delay: function(el, i) {
            return 60 * i
          }
        });
        break;
        default:
        return;
      }

      switch(nextIndex){
        case 1:
        anime.timeline().add({
          targets: ".design",
          translateX: ["180%", 0],
          duration: 500,
          easing: "easeInOutCubic"
        }).add({
          targets: ".scroll1",
          translateY: "0%",
          duration: 500,
          easing: "easeInOutCubic"
        });
        break;

        case 2:
        anime.timeline().add({
          targets: ".scroll1",
          translateY: "180%",
          duration: 500,
          easing: "easeInOutCubic"
        }).add({
          targets: ".js-letter2",
          translateX: ["-105%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 2200,
          delay: function(el, i) {
            return 60 * i
          },
          offset: "-=1500"
        }).add({
          targets: ".scroll2",
          translateY: "0%",
          duration: 500,
          easing: "easeInOutCubic"
        }).add({
          targets: ".scroll3",
          translateY: "0%",
          duration: 500,
          easing: "easeInOutCubic"
        });
        break;

        case 3:
        anime.timeline().add({
          targets: ".scroll2",
          translateY: "0%",
          duration: 500,
          easing: "easeInOutCubic"
        }).add({
          targets: ".scroll3",
          translateY: "180%",
          duration: 500,
          easing: "easeInOutCubic"
        }).add({
          targets: ".scroll1",
          translateY: "0%",
          duration: 500,
          easing: "easeInOutCubic"
        }).add({
          targets: ".js-letter3",
          translateX: ["-105%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 2200,
          delay: function(el, i) {
            return 50 * i
          },
          offset: "-=1200"
        });
        break;
        case 4:
        anime.timeline().add({
          targets: ".scroll3",
          translateY: "0%",
          duration: 500,
          easing: "easeInOutCubic"
        }).add({
          targets: ".js-letter4",
          translateX: ["-105%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 2200,
          delay: function(el, i) {
            return 50 * i
          },
          offset: "-=1200"
        }).add({
          targets: ".scroll2",
          translateY: "180%",
          duration: 500,
          easing: "easeInOutCubic"
        });
        break;
        default:
        return;
      }}
      if (0 == state) {
        var nextClass = ".fp-section-" + nextIndex;
        anime.timeline().add({
          targets: nextClass + " .image",
          scale: [.85, 1],
          translateX: ["10%", 0],
          translateZ: 0,
          easing: "easeOutCubic",
          duration: 1500,
          delay: 500
        }).add({
          targets: nextClass + " .image__cover",
          translateX: [0, "110%"],
          translateY: [0, "110%"],
          translateZ: 0,
          easing: "easeInOutQuart",
          duration: function(el, i) {
            return 1200 - 200 * i
          },
          offset: "-=1700"
        }).add({
          targets: nextClass + " .page-num p",
          translateY: ["100%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 1e3,
          offset: "-=1200"
        }).add({
          targets: nextClass + " .js-letter",
          translateX: ["-105%", 0],
          translateZ: 0,
          easing: "easeInOutCubic",
          duration: 800,
          delay: function(el, i) {
            return 50 * i
          },
          offset: "-=1500"
        });
      }
    },
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {
      $(".section").each(function(i) {
        var num = i + 1;
        $(this).addClass("fp-section-" + num)
      })
    }
  })
}





function headerColor() {
    var pageName = $(".barba-container").attr("data-namespace");
    $(window).on("scroll", function() {
        "top" !== pageName && $(window).scrollTop() > $(window).height() ? ( $(".back-arrow").addClass("js-color")) : ( $(".back-arrow").removeClass("js-color"))
    })
}

function portfolio() {
  // Creating waypoint
  let waypoint1 = new Waypoint({
    element: document.querySelector('#way1'),
    handler: function() {
      anime.timeline().add({
        targets: "#way1",
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 400,
        easing: "easeInOutCubic"
      }).add({
        targets: ".wr-cont",
        translateX: ["-105%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 400,
        delay: function(el, i) {
          return 50 * i
        }
      });
      this.destroy();
    },
    offset: '100%',
  });
  let waypoint2 = new Waypoint({
    element: document.querySelector('#way2'),
    handler: function() {
      anime.timeline().add({
        targets: "#way2",
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeInOutCubic"
      }).add({
        targets: ".kit-cont",
        translateX: ["-105%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
        delay: function(el, i) {
          return 50 * i
        }
      }).add({
        targets: ".kit-fade, .kit-git",
        opacity: [0, 1],
        duration: 800,
        easing: "easeInOutCubic"
      });
      this.destroy();
    },
    offset: '100%',
  });
  let waypoint3 = new Waypoint({
    element: document.querySelector('#way3'),
    handler: function() {
      anime.timeline().add({
        targets: "#way3",
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeInOutCubic"
      }).add({
        targets: ".jw-con",
        translateX: ["-105%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
        delay: function(el, i) {
          return 50 * i
        }
      }).add({
        targets: ".jw-fade, .jw-git",
        opacity: [0, 1],
        duration: 800,
        easing: "easeInOutCubic"
      });
      this.destroy();
    },
    offset: '100%',
  })
}


$('<img src="./img/portfolio.png">'), $('<img src="./img/about2.png">'), $('<img src="./img/contact.jpg">'), $(window).on("load", function() {
  anime.timeline().add({
    targets: ".loader",
    translateY: [0, "-100%"],
    translateZ: 0,
    easing: "easeInOutCubic",
    duration: 800,
    complete: function() {
      $(".loader").addClass(".js-hidden")
    }
  }).add({
    targets: ".active .js-letter",
    translateX: ["-105%", 0],
    translateZ: 0,
    easing: "easeInOutCubic",
    duration: 1500,
    delay: function(el, i) {
      return 50 * i
    },
    offset: "-=1200"
  })
});

var $win = $(window),
fpnav = {},
image = {},
imageBig = {},
isSp = !1;

$(function() {
    $win.on("load resize", function() {
        isSp = !0, fpnav = {
            y: "100%",
            x: 0
        }, image = {
            width: "80%",
            height: "55.633%",
            top: "9.859%",
            marginRight: "10%",
            marginLeft: "10%"
        }, imageBig = {
            width: "100%",
            height: "55.633%",
            marginLeft: 0,
            top: 0
        },  window.matchMedia("(min-width: 801px)").matches ? (isSp = !1, fpnav = {
            y: 0,
            x: "-100%"
        }, image = {
            width: "53.125%",
            height: "74.81%",
            left: "25%",
            top: "100px",
            marginRight: "0",
            marginLeft: "-50px",
            left: "25%"
        }, imageBig = {
            width: "100vw",
            height: "74.81%;",
            marginLeft: "0",
            marginRight: "0",
            left: "0",
            top: "0"
        }, console.log("UNDERLAYER" + isSp)) : window.matchMedia("(min-width: 421px)").matches && (isSp = !1, fpnav = {
            y: "100%",
            x: 0
        }, image = {
            width: "53.125%",
            height: "74.81%",
            left: "25%",
            top: "100px",
            marginRight: "0",
            marginLeft: "-50px",
            left: "25%"
        }, imageBig = {
            width: "60.677%",
            height: "99vh",
            top: "auto",
            marginLeft: "auto"
        })
    })
}),

Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck, Barba.Pjax.preventCheck = function(evt, element) {
  return !!($(element).attr("href") && -1 < $(element).attr("href").indexOf("#")) || Barba.Pjax.originalPreventCheck(evt, element)
};

var state = 0;

Barba.Dispatcher.on("newPageReady", function() {
  // portfolio image resize when hovered
  if (document.body.contains(document.getElementById('#fp-slidesNav'))) {
    var imagePort = document.querySelector('.image--works');
    function animateButton(scale, duration, elasticity, radius) {
      anime.remove(imagePort);
      anime({
        targets: imagePort,
        scale: scale,
        borderRadius: radius,
        duration: duration,
        elasticity: elasticity
      });
    }
    function enterButton() { animateButton(1.1, 800, 400,0) };
    function leaveButton() { animateButton(1.0, 600, 300,0) };
    function clickButton() { animateButton(1.0, 0, 100,"50%") };

    imagePort.addEventListener('mouseenter', enterButton, false);
    imagePort.addEventListener('mouseleave', leaveButton, false);
    imagePort.addEventListener('onmousedown', clickButton, false);
  }

  if ($("#fullpage").length);
  isSp && $(".page-top").height($(window).height()), ga("send", "pageview", window.location.pathname.replace(/^\/?/, "/") + window.location.search)
}),
$(function() {
  fullPage();
  var height = $(window).height();
});


var topTransition = Barba.BaseView.extend({
    namespace: "top",
    onEnter: function() {
        Barba.Pjax.getTransition = function() {
            return PageTransitionTop
        }, $(".js-contact").on("click", function() {
            $.fn.fullpage.moveTo("contact"), Barba.Pjax.getTransition = function() {
                return PageTransitionTop
            }
        }), $(".js-portfolio").on("click", function() {
            $.fn.fullpage.moveTo("portfolio"), Barba.Pjax.getTransition = function() {
                return PageTransitionTop
            }
        }), $(".js-about").on("click", function() {
            $.fn.fullpage.moveTo("about"), Barba.Pjax.getTransition = function() {
                return PageTransitionTop
            }
        })
    },
    onEnterCompleted: function() {},
    onLeave: function() {},
    onLeaveCompleted: function() {
      $.fn.fullpage.destroy("all")
    }
});
topTransition.init();

var underLayer = Barba.BaseView.extend({
  namespace: "underlayer",
  onEnter: function() {
    Barba.Pjax.getTransition = function() {
      return PageTransitionUnder
    }, $(window).scroll(function() {
      $(".js-scroll").each(function(i) {
        $(window).scrollTop() + $(window).height() > $(this).offset().top && $(this).addClass("in")
      })
    }), isSp && $(".page-top").height($(window).height())
  },
  onEnterCompleted: function() {
    headerColor();
    portfolio();
    anime.timeline({
      duration: 100,
      easing: "easeInOutCubic"
    }).add({
      targets: ".btn-wrap",
      translateY: ["110%", 0]
    }).add({
      targets: ".back-arrow svg",
      translateX: ["100%", 0],
      offset: "-=500"
    }).add({
      targets: ".active .top-title",
      translateY: ["-110%", 0]
    })
  },
  onLeave: function() {
    state = 1;
    anime.timeline({
      duration: 500,
      easing: "easeInOutCubic"
    }).add({
      targets: ".wellred-img",
      translateY: "110px"
    }).add({
      targets: ".btn-wrap",
      translateY: [0, "110%"]
    }).add({
      targets: ".back-arrow svg",
      translateX: [0, "-100%"],
      offset: "-=500"
    }).add({
      targets: ".active .top-title",
      translateY: [0, "-110%"]
    })
  },
  onLeaveCompleted: function() {
    fullPage(), state = 0;
    anime.timeline({
      duration: 500,
      easing: "easeInOutCubic"
    }).add({
      targets: ".active .page-num p",
      translateY: ["100%", 0],
      translateZ: 0
    }).add({
      targets: "#fp-nav ul",
      translateY: [fpnav.y, 0],
      translateX: [fpnav.x, 0],
      translateZ: 0,
      offset: "-=500"
    }).add({
      targets: ".active .btn-wrap",
      translateY: ["110%", 0],
      translateZ: 0,
      offset: "-=500"
    }).add({
      targets: ".active .top-title",
      translateY: ["-110%", 0],
      translateZ: 0,
      offset: "-=500"
    })
  }
});
underLayer.init();

var PageTransitionTop = Barba.BaseTransition.extend({
  start: function() {
    this.open().then(this.newContainerLoading).then(this.finish.bind(this))
  },
  open: function() {
    return new Promise(function(resolve) {
      anime.timeline({
        duration: 500,
        easing: "easeInOutCubic",
        complete: function() {
          resolve()
        }
      }).add({
            targets: ".active .image",
            scale: 1,
            borderRadius: 0
          }).add({
        targets: ".active .image",
        width: [image.width, imageBig.width],
        height: [image.height, imageBig.height],
        marginRight: [image.marginRight, 0],
        marginLeft: [image.marginLeft, imageBig.marginLeft],
        top: [image.top, imageBig.top],
        left: [image.left, imageBig.left]
      }).add({
        targets: ".fullpage__slide",
        background: ["rgba(0,0,0,0)", "#919191"],
        offset: "-=500"
      }).add({
        targets: ".page-num p",
        translateY: [0, "100%"],
        translateZ: 0,
        offset: "-=500"
      }).add({
        targets: "#fp-nav ul",
        translateY: [0, fpnav.y],
        translateX: [0, fpnav.x],
        translateZ: 0,
        offset: "-=500"
      }).add({
        targets: ".active .btn-wrap",
        translateY: [0, "110%"],
        translateZ: 0,
        offset: "-=500"
      }).add({
        targets: ".scrollDown",
        translateY: "180%",
        offset: "-=500"
      }).add({
        targets: ".active .top-title",
        translateY: [0, "-110%"],
        translateZ: 0,
        offset: "-=500"
      }).play()
    })
  },
  finish: function() {
    this.done()
  }
}),


PageTransitionUnder = Barba.BaseTransition.extend({
  start: function() {
    this.close().then(this.newContainerLoading).then(this.finish.bind(this))
  },
  close: function() {
    return new Promise(function(resolve) {
      var closeAnime = anime.timeline({
        duration: 500,
        easing: "easeInOutCubic",
        autoplay: !1,
        complete: function() {
          resolve()
        }
      }).add({
        targets: ".page-top .image",
        width: [imageBig.width, image.width],
        height: [imageBig.height, image.height],
        marginRight: [0, image.marginRight],
        marginLeft: [imageBig.marginLeft, image.marginLeft],
        top: [imageBig.top, image.top],
        left: [imageBig.left, image.left]
      });
      0 !== $(window).scrollTop() ? $("body,html").animate({
        scrollTop: 0
      }, 500, "swing", closeAnime.play) : closeAnime.play()
    })
  },
  finish: function() {
    this.done()
  }
});

$(function() {
  Barba.Pjax.start(), Barba.Prefetch.init(), Barba.Utils.xhrTimeout = 1e4
});
