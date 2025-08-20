let ageSelect = document.getElementById("ageSelect");
let massageBox = document.getElementById("massageBox");
let age = document.getElementById("age");

ageSelect.addEventListener("change", function() {
    let values = this.value;

    if(values == "0-6"){
        
        massageBox.innerHTML = "ছোট বাচ্চাদের প্রতি পিতা-মাতার দায়িত্ব: আল্লাহর হুকুম অনুযায়ী ভালো যত্ন, স্নেহ ও স্নিগ্ধতা দেখানো। শিশুদের খেলাধুলা, স্বাস্থ্য ও প্রাথমিক ইসলামী শিক্ষা নিশ্চিত করা।";
        age.innerHTML="আপনার সন্তানের বয়স: "+values;
    } else if(values =="7-10"){
        
        massageBox.innerHTML = "এই বয়সের জন্য: নামাজ শেখানো শুরু করা, সহজ কোরআন শিক্ষার পরিচয় দেওয়া, শিশুদের সাথে ধৈর্য ও ভালো আচরণ রাখা।";
        age.innerHTML="আপনার সন্তানের বয়স: "+values;
    } else if(values == "11-17"){
        
        massageBox.innerHTML = "কিশোর বয়স: শিক্ষার প্রতি দৃষ্টি রাখা, ইসলামী নৈতিকতা শেখানো, আত্মনিয়ন্ত্রণ এবং সঠিক বন্ধুপরিচয় নিশ্চিত করা পিতামাতার দায়িত্ব।";
        age.innerHTML="আপনার সন্তানের বয়স: "+values;
    } else if(values == "18-27"){
        
        massageBox.innerHTML = "যুবক/যুবতী: বিবাহের জন্য প্রস্তুতি, ধর্মীয় ও নৈতিক দিক নির্দেশনা, সামাজিক ও পারিবারিক দায়িত্ব শেখানো। পিতামাতার দায়িত্ব হলো পরামর্শ ও সমর্থন দেওয়া।";
        age.innerHTML="আপনার সন্তানের বয়স: "+values;
    } else if(values == "28-50" ){
        
        massageBox.innerHTML = "পরিবার ও পেশাগত জীবন: সন্তানদের পরামর্শ দেওয়া, নৈতিক ও ধর্মীয় দিক নির্দেশনা অব্যাহত রাখা, পরিবারের সঙ্গে সংহতি বজায় রাখা।";
        age.innerHTML="আপনার সন্তানের বয়স: "+values;
        
    } else {
        
        massageBox.innerHTML = "বয়সী পিতা-মাতা: অভিজ্ঞতা ভাগ করা, সন্তানের নৈতিক ও ধর্মীয় শিক্ষায় সহযোগিতা, পরিবার ও সম্প্রদায়ে ভালো উদাহরণ স্থাপন করা।";
        age.innerHTML="আপনার সন্তানের বয়স: "+values;
    }
});
