// To-Do: Annotate code, add to portfolio, randomize questions and choices without repeating,
//        add end page, add styling, adjust timer and break between questions

var questions = {
    
    agrgryp : ['Agrimonia gryposepala', 'Aegopodium podagraria', 'Geum canadense', 'Ranunculus acris'],
    anequin : ['Anemone quinquefolia', 'Anemone canadensis', 'Geranium maculatum', 'Thalictrum dioicum'],
    saglati : ['Sagittaria latifolia', 'Caltha palustris', 'Maianthemum stellatum', 'Viola sororia'],
    heltube : ['Helianthus tuberosus', 'Solidago gigantea','Taraxacum officinale', 'Urtica dioica'],
    asturop : ['Symphyotrichum urophyllum', 'Symphyotrichum lateriflorum', 'Daucus carota', 'Eurybia macrophylla'],
    galapar : ['Galium aparine', 'Galium triflorum', 'Linaria vulgaris', 'Mithcella repens'],
    uvugran : ['Uvularia grandiflora', 'Maianthemum racemosum', 'Trillium grandiflorum', 'Erythronium americanum'],
    eupmacu : ['Eutrochium maculatum', 'Eupatorium perfoliatum', 'Helianthus tuberosus', 'Asclepias syriaca'],
    medvirg : ['Medeola virginiana', 'Clintonia borealis', 'Epipactis helleborine', 'Trientalis borealis'],
    taxcana : ['Taxus canadensis', 'Taxus cuspidata', 'Tsuga canadensis', 'Abies balsamea']

}

var images = [

    "<img src='assets/images/agrgryp.jpg'>",
    "<img src='assets/images/anequin.jpg'>",
    "<img src='assets/images/saglati.jpg'>",
    "<img src='assets/images/heltube.jpg'>",
    "<img src='assets/images/asturop.jpg'>",
    "<img src='assets/images/galapar.jpg'>",
    "<img src='assets/images/uvugran.jpg'>",
    "<img src='assets/images/eupmacu.jpg'>",
    "<img src='assets/images/medvirg.jpg'>",
    "<img src='assets/images/taxcana.jpg'>",

]

var q;
var quizTimer;
var answer;
var correctAnswers;
var incorrectAnswers;
var options = ['#option1', '#option2', '#option3', '#option4'];
var labels = ['#label1', '#label2', '#label3', '#label4'];
var intervalID;

$('#start').on("click", function() {
    setTimeout(function() { $('form').removeClass('invisible') }, 1000);
    $('#timer-caption').removeClass('invisible');
    $('#start').addClass('invisible');
    q = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    quizTimer = 11;
    intervalID = setInterval(timer, 1000);
})

function timer() {
    if (quizTimer === 11) {
        $('#image').html(images[q]);
        for (var i = 0; i < options.length; i++) {
            $(labels[i]).text(questions[Object.keys(questions)[q]][i]);
            $(options[i]).val(questions[Object.keys(questions)[q]][i]);
        }
        quizTimer -= 1;
        $('#quizTimer').text(quizTimer.toString());
    }
    else if (quizTimer <= 0 || $('input').is(':checked')) {
        checkAnswer();
        q += 1;
        quizTimer = 11;
        setTimeout(function() { $('input').prop('checked', false) }, 1000);
        setTimeout(function() { $('#message').text('') }, 1000);
        setTimeout(function() { end() }, 1000);
    }
    else {
        quizTimer -= 1;
        $('#quizTimer').text(quizTimer.toString());     
    }
}

function checkAnswer() {
    answer = $('input:checked').val();
    if (answer === questions[Object.keys(questions)[q]][0]) {
        correctAnswers  += 1;
        $('#message').text('Correct!');
    }
    else if (answer !== questions[Object.keys(questions)[q]][0]) {
        incorrectAnswers += 1;
        $('#message').text('Incorrect. ' + 'The answer is ' + questions[Object.keys(questions)[q]][0] + '.');
    }
}

function end() {
    if (q === images.length) {
        clearInterval(intervalID);
        $('#start').removeClass('invisible');
        $('form').addClass('invisible');
        $('img').addClass('invisible');
        $('#timer-caption').addClass('invisible');
    }
}