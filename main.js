let skills = {
    knowledge: {
        html: 60,
        css: 50,
        js:20,
        photoshop: 30,
        illustrator: 20,
        adobexd: 50
    },
    languages: {
        english: 70,
        russian: 90,
        french: 40
    }
};

$(function (){
   let languageObjects = $('div[data-language]'); // polu4enije objektov s atributom data-language
   let knowledgeObjects = $('div[data-knowledge]');
   //obrabotka objektov s atributom data-languaged
   $.each(languageObjects,function (){
      $(this).css({
         width:skills.languages[$(this).data('language')]+'%'
      });
   });
   $.each(knowledgeObjects,function (){
      $(this).css({
         width:skills.knowledge[$(this).data('knowledge')]+'%'
      });
   });
});