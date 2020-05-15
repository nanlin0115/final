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
        "image" : "data:image/png;base64,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",
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
