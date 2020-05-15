document.addEventListener('DOMContentLoaded', function (event) {
    $("#loaderBg").fadeOut();

    // Type Writer
    // array with texts to type in typewriter
    var dataText = ["Tweeter.", "YouTube.", "Instagram.", "Facebook.","WhatsApp.","WeChat.","Tumblr.","Tencent QQ.","Telegram.","Line.","SnapChat.","LinkIn.","Pinterest"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("wlcmTW").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 500);
        }
        // check if dataText[i] exists
        else if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);

   
});
let contentGridElement = document.getElementById('contentGrid');

let firstJSON = {
  "title" : "Facebook",
  "Founder" : "",
  "Year":"2004",
  "image" : "https://makeawebsitehub.com/wp-content/uploads/2016/05/fb.png ",
  "color" : "#000000",
}

let jsonDatabase = [
      {
        "title" : "WhatsApp",
        "Founder" : "Jan Koum, Brian Acton",
        "Year":"Year Found: 2009",
        "image" : "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5302_-_Whatsapp-512.png",
        "color" : "#000000",
      },
      {
        "title" : "Tencent QQ",
        "Founder" : "Ma, Huateng",
        "Year":"Year Found: 2000",
        "image" : "https://cdn.iconscout.com/icon/free/png-512/qq-7-569341.png",
        "color" : "#000000",
      },
      {
        "title" : "WeChat",
        "Founder" : "Ma, Huatent",
        "Year":"Year Found: 2011",
        "image" : "https://i.dlpng.com/static/png/4362762-messenger-social-wechat-icon-wechat-png-512_512_preview.webp",
        "color" : "#000000",
      },
      {
        "title" : "Tumblr",
        "Founder" : "David Karp",
        "Year":"Year Found: 2007",
        "image" : "https://cdn0.iconfinder.com/data/icons/flat-social-media-icons-set-round-style-1/550/tumblr-512.png",
        "color" : "#000000",
      },
      {
        "title" : "Instagram",
        "Founder" : "Kevin Systrom",
        "Year":"Year Found: 2010",
        "image" : "https://www.stanthonyshs.org/wp-content/uploads/2018/08/instagram-colourful-icon.png ",
        "color" : "#000000",
      },
      {
        "title" : "Twitter",
        "Founder" : "Jack Dorsey",
        "Year":"Year Found: 2006",
        "image" : "https://www.avenueroadadvertising.com/wp-content/uploads/2015/05/twitter-logo.png",
        "color" : "#000000",
      },
      {
        "title" : "Baidu Tieba",
        "Founder" : "Robin Li",
        "Year":"Year Found: 2003",
        "image" : "https://images.liqucn.com/img/h99/h06/img_localize_2605e4529b8871538e5fdc3a42bb331d_560x375.jpg",
        "color" : "#000000",
      },
      {
        "title" : "Skype",
        "Founder" : "Niklas Zennström",
        "Year":"Year Found: 2003",
        "image" : "https://i.ytimg.com/vi/v2kd9BioN3s/maxresdefault.jpg",
        "color" : "#000000",
      },
      {
        "title" : "Viber",
        "Founder" : "Talmon Marco",
        "Year":"Year Found: 2010",
        "image" : "https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Viber-512.png",
        "color" : "#000000",
      },
      {
        "title" : "Sina Weibo",
        "Founder" : "Charles Chao",
        "Year":"Year Found: 2009",
        "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sina_Weibo.svg/1200px-Sina_Weibo.svg.png",
        "color" : "#000000",
      },
      {
        "title" : "Line",
        "Founder" : "Naver Corporation",
        "Year":"Year Found: 2000",
        "image" : "https://lh3.googleusercontent.com/proxy/DfyhHPVJGq8VBpfJASUDZ1_Xh1jkdu6szHYoUzCdhGfN8EwRqq6ltZ1w6OiCFAfzrSL2sMKD27vQuYDZ-0jNW1PYNGK0gA7U0NaMNLrYXbyyQAXDf_SEoV4",
        "color" : "#000000",
      },
      {
        "title" : "SnapChat",
        "Founder" : "Evan Spiegel",
        "Year":"Year Found: 2011",
        "image" : "https://www.freepngimg.com/thumb/social_media/74079-icons-media-snapchat-computer-social-snap-logo.png",
        "color" : "#000000",
      },
      {
        "title" : "YY",
        "Founder" : "David Li",
        "Year":"Year Found: 2012",
        "image" : "https://cdn.onlinewebfonts.com/svg/img_370854.png",
        "color" : "#000000",
      },
      {
        "title" : "VKontakte (VK)",
        "Founder" : "Pavel Durov,",
        "Year":"Year Found: 2006",
        "image" : "https://icons-for-free.com/iconfiles/png/512/vkontakte+icon+icon-1320194643487004477.png",
        "color" : "#000000",
      },
      {
        "title" : "Pinterest",
        "Founder" : "Ben Silbermann",
        "Year":"Year Found: 2009",
        "image" : "https://pngimg.com/uploads/pinterest/pinterest_PNG63.png",
        "color" : "#000000",
      },
      {
        "title" : "LinkedIn",
        "Founder" : "Reid Hoffman",
        "Year":"Year Found: 2002",
        "image" : "https://cdn3.iconfinder.com/data/icons/social-icons-5/606/LinkedIn.png",
        "color" : "#000000",
      },
      {
        "title" : "Telegram",
        "Founder" : "Pavel Durov",
        "Year":"Year Found: 2013",
        "image" : "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png",
        "color" : "#000000",
      },
      

]

for (var i = 0; i < jsonDatabase.length; i++) {
  createZodiac(jsonDatabase[i]);
}

function createZodiac(incomingJSON) {


  let newContentElement = document.createElement("DIV");
  newContentElement.style.border = "4px solid" + incomingJSON['color'];
  newContentElement.style.color = incomingJSON['color'];
  newContentElement.classList.add('contentItem');


  let newSign = document.createElement("H2");
  newSign.innerHTML = incomingJSON['title'];
  newSign.classList.add('app');
  newContentElement.appendChild(newSign);


  let newContentFounder = document.createElement("H3");
  newContentFounder.innerHTML = incomingJSON['Founder'];
  newContentElement.appendChild(newContentFounder);

  
  let newContentYear = document.createElement("P");
  newContentYear.innerHTML = incomingJSON['Year']
  newContentElement.appendChild(newContentYear);


  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['image'];
  newContentElement.appendChild(newImage);


  contentGridElement.appendChild(newContentElement);
}
