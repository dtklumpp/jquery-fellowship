console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")


// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");










  // 1. create a section tag with an id of middle-earth
      //const section2 = $.createElement('section'); this dog don't hunt
  //const section0 = $.create('section'); this code don't go
  //const section3 = $('<div></div>'); man why i got to type it twice


  //apparently this is faster:
  //const section1 = document.createElement('section');
  //but this also works:
  const $section1 = $('<section/>');
  $section1.attr('id', 'middle-earth');

  //section5.addClass('middle-earth'); //this works...
  //const showVar = $('section'); //oh i bet this doesn't find it b/c haven't added to page yet
  //console.log(showVar);
  //console.log({showVar});

  //$('section').addClass('middle-earth');
  //$('section').attr('id', 'middle-earth');


  // 2. append the section to the body of the DOM.
  $('body').append($section1);
  //$('section').attr('id', 'middle-earth'); //aha!
  // console.log(section1);
  // console.log({section1});

  //$('body').append("<section id='middle earth'></section>");
  //$('body').append('div'); doesn't work
  //$('body').append('<div />'); this works!
  //$('body').append('<div></div>'); this too!

  //Lol i tried like 50 things over 1.5 hours just to answer the first 2 questions
  //but they never told us how to create a floating element!
  //well, at least now i won't forget...











  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

  for(eachLand of lands){
    const newArticle = $('<article/>');
    newArticle.attr('id', eachLand);
    //newArticle.append('<h1 />').text(eachLand); //note: this doesn't work
    newArticle.append($('<h1/>').text(eachLand));
    $section1.append(newArticle);
  }






};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.
  const uList = $('<ul />');
  for(eachHobbit of hobbits){
    const newHobbit = $('<li/>').text(eachHobbit);
    uList.append(newHobbit);
  }
  $('#The-Shire').append(uList);


  // 2. give each hobbit a class of "hobbit"

  $('li').addClass('hobbit');

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  console.log('Keep It Secret Keep It Safe');


  // 1. create an empty div with an id of 'the-ring'

  const div1 = $('<div/>');
  div1.attr('id', 'the-ring');

  // 2. add the ring as a child of Frodo

  //$h = $('.hobbit')
  $('.hobbit').eq(0).append(div1);
//  $('.hobbot')
//  console.log()

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  console.log('Make Baddies');

  // 1. display an unordered list of baddies in Mordor

  const uList2 = $('<ul/>');
  for(eachVillain of baddies){
    uList2.append(($('<li/>').text(eachVillain)));
  }
  $('#Mordor').append(uList2);


  // 2. give each of the baddies a class of "baddy"

  $('#Mordor li').addClass('baddy');



  // 3. remember to append them to Mordor
  //yeah i done it
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  console.log('Make Buddies');


  // 1. create an aside tag and append it to middle-earth below mordor

  const aside1 = $('<aside/>');
  $('#middle-earth').append(aside1);
  //$section1.append('<div>hey</div>');




  // 2. display an unordered list of buddies in the aside

  
  const uList3 = $('<ul />');
  for(eachBuddy of buddies){
    aside1.append($('<li/>').text(eachBuddy));
  }




  // 3. give each of the buddies a class of "buddy"

  $('aside li').attr('class', 'buddy');



};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  console.log('Leave The Shire');


  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  const hobbitList = $('#The-Shire ul');
  $('#Rivendell').append(hobbitList);


  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  console.log('Beautiful Stranger');


  // 1. change the buddy 'Strider' textnode to "Aragorn"

  const buddiesList = $('aside li');
  buddiesList.eq(3).text("Aragorn");


  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  console.log('Forge The Fellowship');


  // 1. create a new div with an id 'the-fellowship'

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  console.log('The Balrog');


  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  console.log('Horn of Gondor');


  // 1. create a pop-up alert that the horn of gondor has been blown

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  console.log('Its Dangerous to Go Alone');


  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  console.log('We Wants It');


  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  console.log('There And Back Again');


  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#14').on('click', () => {
    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBaddies();
    makeBuddies();
    leaveTheShire();
    beautifulStranger();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
  });

});
