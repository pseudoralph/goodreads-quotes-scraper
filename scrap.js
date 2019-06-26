// https://www.goodreads.com/quotes/tag/programming

// Array.from(document.getElementsByClassName('quoteDetails')).map(x => [
//   {
//     author: x
//       .getElementsByClassName('authorOrTitle')[0]
//       .innerText.replace(/\W*$/, ''),
//     quote: x
//       .getElementsByClassName('quoteText')[0]
//       .innerText.replace(/“|”|\n.*/gm, ''),
//     url: x.querySelectorAll('a.smallText')[0].href
//   }
// ]);

// document.querySelector('a.next_page').click()

const quotesDB = [
  
    {
      "author": "Linus Torvalds",
      "quote": "Talk is cheap. Show me the code.",
      "url": "https://www.goodreads.com/quotes/437173-talk-is-cheap-show-me-the-code"
    }
  ,
  
    {
      "author": "Why The Lucky Stiff",
      "quote": "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.",
      "url": "https://www.goodreads.com/quotes/201306-when-you-don-t-create-things-you-become-defined-by-your"
    }
  ,
  
    {
      "author": "Harold Abelson",
      "quote": "Programs must be written for people to read, and only incidentally for machines to execute.",
      "url": "https://www.goodreads.com/quotes/9168-programs-must-be-written-for-people-to-read-and-only"
    }
  ,
  
    {
      "author": "John Woods",
      "quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
      "url": "https://www.goodreads.com/quotes/248194-always-code-as-if-the-guy-who-ends-up-maintaining"
    }
  ,
  
    {
      "author": "Rick Cook",
      "quote": "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
      "url": "https://www.goodreads.com/quotes/177682-programming-today-is-a-race-between-software-engineers-striving-to"
    }
  ,
  
    {
      "author": "Richard P. Feynman",
      "quote": "Well, Mr. Frankel, who started this program, began to suffer from the computer disease that anybody who works with computers now knows about. It's a very serious disease and it interferes completely with the work. The trouble with computers is you *play* with them. They are so wonderful. You have these switches - if it's an even number you do this, if it's an odd number you do that - and pretty soon you can do more and more elaborate things if you are clever enough, on one machine.",
      "url": "https://www.goodreads.com/quotes/325051-well-mr-frankel-who-started-this-program-began-to-suffer"
    }
  ,
  
    {
      "author": "Alison Miller",
      "quote": "Punishments include such things as flashbacks, flooding of unbearable emotions, painful body memories, flooding of memories in which the survivor perpetrated against others, self-harm, and suicide attempts.",
      "url": "https://www.goodreads.com/quotes/981599-punishments-include-such-things-as-flashbacks-flooding-of-unbearable-emotions"
    }
  ,
  
    {
      "author": "Donald E. Knuth",
      "quote": "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.",
      "url": "https://www.goodreads.com/quotes/386159-the-best-programs-are-written-so-that-computing-machines-can"
    }
  ,
  
    {
      "author": "Larry Niven",
      "quote": "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
      "url": "https://www.goodreads.com/quotes/204427-that-s-the-thing-about-people-who-think-they-hate-computers"
    }
  ,
  
    {
      "author": "Martin Fowler",
      "quote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "url": "https://www.goodreads.com/quotes/6341736-any-fool-can-write-code-that-a-computer-can-understand"
    }
  ,
  
    {
      "author": "Muhammad Waseem",
      "quote": "Give a man a program, frustrate him for a day.",
      "url": "https://www.goodreads.com/quotes/841129-give-a-man-a-program-frustrate-him-for-a-day"
    }
  ,
  
    {
      "author": "Kent Beck",
      "quote": "I'm not a great programmer; I'm just a good programmer with great habits.",
      "url": "https://www.goodreads.com/quotes/532211-i-m-not-a-great-programmer-i-m-just-a-good-programmer"
    }
  ,
  
    {
      "author": "Rasheed Ogunlaru",
      "quote": "How you look at it is pretty much how you'll see it",
      "url": "https://www.goodreads.com/quotes/724953-how-you-look-at-it-is-pretty-much-how-you-ll"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "Truth can only be found in one place: the code.",
      "url": "https://www.goodreads.com/quotes/857947-truth-can-only-be-found-in-one-place-the-code"
    }
  ,
  
    {
      "author": "Steve Jobs",
      "quote": "You've baked a really lovely cake, but then you've used dog shit for frosting.",
      "url": "https://www.goodreads.com/quotes/455753-you-ve-baked-a-really-lovely-cake-but-then-you-ve-used"
    }
  ,
  
    {
      "author": "Brian Kernighan",
      "quote": "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
      "url": "https://www.goodreads.com/quotes/273375-everyone-knows-that-debugging-is-twice-as-hard-as-writing"
    }
  ,
  
    {
      "author": "Alan J. Perlis",
      "quote": "A language that doesn't affect the way you think about programming is not worth knowing.",
      "url": "https://www.goodreads.com/quotes/393595-a-language-that-doesn-t-affect-the-way-you-think-about"
    }
  ,
  
    {
      "author": "Charles Babbage",
      "quote": "On two occasions, I have been asked by members of Parliament, 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able to rightly apprehend the kind of confusion of ideas that could provoke such a question.",
      "url": "https://www.goodreads.com/quotes/9170-on-two-occasions-i-have-been-asked-by-members-of"
    }
  ,
  
    {
      "author": "Alan Kay",
      "quote": "The most disastrous thing that you can ever learn is your first programming language.",
      "url": "https://www.goodreads.com/quotes/543399-the-most-disastrous-thing-that-you-can-ever-learn-is"
    }
  ,
  
    {
      "author": "Edward V. Berard",
      "quote": "Walking on water and developing software from a specification are easy if both are frozen.",
      "url": "https://www.goodreads.com/quotes/234986-walking-on-water-and-developing-software-from-a-specification-are"
    }
  ,
  
    {
      "author": "Joseph Weizenbaum",
      "quote": "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
      "url": "https://www.goodreads.com/quotes/328483-the-computer-programmer-is-a-creator-of-universes-for-which"
    }
  ,
  
    {
      "author": "Keith Bostic",
      "quote": "Perl – The only language that looks the same before and after RSA encryption.",
      "url": "https://www.goodreads.com/quotes/437174-perl-the-only-language-that-looks-the-same-before"
    }
  ,
  
    {
      "author": "C.A.R. Hoare",
      "quote": "The most important property of a program is whether it accomplishes the intention of its user.",
      "url": "https://www.goodreads.com/quotes/410523-the-most-important-property-of-a-program-is-whether-it"
    }
  ,
  
    {
      "author": "Larry Wall",
      "quote": "When they first built the University of California at Irvine they just put the buildings in. They did not put any sidewalks, they just planted grass. The next year, they came back and put the sidewalks where the trails were in the grass. Perl is just that kind of language. It is not designed from first principles. Perl is those sidewalks in the grass.",
      "url": "https://www.goodreads.com/quotes/9169-when-they-first-built-the-university-of-california-at-irvine"
    }
  ,
  
    {
      "author": "Marvin Minsky",
      "quote": "A computer is like a violin. You can imagine a novice trying ﬁrst a phonograph and then a violin. The latter, he says, sounds terrible. That is the argument we have heard from our humanists and most of our computer scientists. Computer programs are good, they say, for particular purposes, but they aren’t ﬂexible. Neither is a violin, or a typewriter, until you learn how to use it.",
      "url": "https://www.goodreads.com/quotes/406964-a-computer-is-like-a-violin-you-can-imagine-a"
    }
  ,
  
    {
      "author": "Paul Graham",
      "quote": "Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.",
      "url": "https://www.goodreads.com/quotes/260364-object-oriented-programming-offers-a-sustainable-way-to-write-spaghetti-code"
    }
  ,
  
    {
      "author": "Alan J. Perlis",
      "quote": "I think that it’s extraordinarily important that we in computer science keep fun in computing. When it started out it was an awful lot of fun. Of course the paying customers got shafted every now and then and after a while we began to take their complaints seriously. We began to feel as if we really were responsible for the successful error-free perfect use of these machines. I don’t think we are. I think we’re responsible for stretching them setting them off in new directions and keeping fun in the house. I hope the ﬁeld of computer science never loses its sense of fun. Above all I hope we don’t become missionaries. Don’t feel as if you’re Bible sales-men. The world has too many of those already. What you know about computing other people will learn. Don’t feel as if the key to successful computing is only in your hands. What’s in your hands I think and hope is intelligence: the ability to see the machine as more than when you were ﬁrst led up to it that you can make it more.",
      "url": "https://www.goodreads.com/quotes/405620-i-think-that-it-s-extraordinarily-important-that-we-in-computer"
    }
  ,
  
    {
      "author": "Michael Crichton",
      "quote": "At forty, I was too old to work as a programmer myself anymore; writing code is a young person’s job.",
      "url": "https://www.goodreads.com/quotes/284831-at-forty-i-was-too-old-to-work-as-a"
    }
  ,
  
    {
      "author": "Chuck Palahniuk",
      "quote": "Big Brother fills us all with the same crap. My guess is he was clever the same way everybody thinks they're clever. I tell her to type in 'password",
      "url": "https://www.goodreads.com/quotes/233589-big-brother-fills-us-all-with-the-same-crap-my"
    }
  ,
  
    {
      "author": "Suzy Kassem",
      "quote": "A conscious human is driven by their conscience, not popular opinion.",
      "url": "https://www.goodreads.com/quotes/7989658-a-conscious-human-is-driven-by-their-conscience-not-popular"
    }
  ,
  
    {
      "author": "Douglas Rushkoff",
      "quote": "We are looking at a society increasingly dependent on machines, yet decreasingly capable of making or even using them effectively.",
      "url": "https://www.goodreads.com/quotes/4197268-we-are-looking-at-a-society-increasingly-dependent-on-machines"
    }
  ,
  
    {
      "author": "Max Kanat-Alexander",
      "quote": "Some of the best programming is done on paper, really. Putting it into the computer is just a minor detail.",
      "url": "https://www.goodreads.com/quotes/543201-some-of-the-best-programming-is-done-on-paper-really"
    }
  ,
  
    {
      "author": "Alan J. Perlis",
      "quote": "Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.",
      "url": "https://www.goodreads.com/quotes/9172-programmers-are-not-to-be-measured-by-their-ingenuity-and"
    }
  ,
  
    {
      "author": "Edsger W. Dijkstra",
      "quote": "Progress is possible only if we train ourselves to think about programs without thinking of them as pieces of executable code. ",
      "url": "https://www.goodreads.com/quotes/9167-progress-is-possible-only-if-we-train-ourselves-to-think"
    }
  ,
  
    {
      "author": "Charles Petzold",
      "quote": "Code is not like other how-computers-work books. It doesn't have big color illustrations of disk drives with arrows showing how the data sweeps into the computer. Code has no drawings of trains carrying a cargo of zeros and ones. Metaphors and similes are wonderful literary devices but they do nothing but obscure the beauty of technology.",
      "url": "https://www.goodreads.com/quotes/485701-code-is-not-like-other-how-computers-work-books-it-doesn-t-have"
    }
  ,
  
    {
      "author": "Douglas Crockford",
      "quote": "We see a lot of feature-driven product design in which the cost of features is not properly accounted. Features can have a negative value to customers because they make the products more difficult to understand and use. We are finding that people like products that just work. It turns out that designs that just work are much harder to produce that designs that assemble long lists of features.",
      "url": "https://www.goodreads.com/quotes/108190-we-see-a-lot-of-feature-driven-product-design-in-which"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "Remember that code is really the language in which we ultimately express the requirements. We may create languages that are closer to the requirements. We may create tools that help us parse and assemble those requirements into formal structures. But we will never eliminate necessary precision—so there will always be code.",
      "url": "https://www.goodreads.com/quotes/844546-remember-that-code-is-really-the-language-in-which-we"
    }
  ,
  
    {
      "author": "Andrew Hunt",
      "quote": "Don't gloss over a routine or piece of code involved in the bug because you \"know\" it works. Prove it. Prove it in this context, with this data, with these boundary conditions.",
      "url": "https://www.goodreads.com/quotes/531191-don-t-gloss-over-a-routine-or-piece-of-code-involved"
    }
  ,
  
    {
      "author": "Alan J Perlis",
      "quote": "Is it possible that software is not like anything else, that it is meant",
      "url": "https://www.goodreads.com/quotes/406785-is-it-possible-that-software-is-not-like-anything-else"
    }
  ,
  
    {
      "author": "Steven S. Skiena",
      "quote": "The issue of finding the best possible answer or achieving maximum efficiency usually arises in industry only after serious performance or legal troubles.",
      "url": "https://www.goodreads.com/quotes/272687-the-issue-of-finding-the-best-possible-answer-or-achieving"
    }
  ,
  
    {
      "author": "James Alan Gardner",
      "quote": "What kind of programmer is so divorced from reality that she thinks she'll get complex software right the first time?",
      "url": "https://www.goodreads.com/quotes/491749-what-kind-of-programmer-is-so-divorced-from-reality-that"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "I'm a programmer. I like programming. And the best way I've found to have a positive impact on code is to write it.",
      "url": "https://www.goodreads.com/quotes/9604641-i-m-a-programmer-i-like-programming-and-the-best-way"
    }
  ,
  
    {
      "author": "Vernor Vinge",
      "quote": "Programming went back to the beginning of time. It was a little like the midden out back of his father's castle.",
      "url": "https://www.goodreads.com/quotes/444756-programming-went-back-to-the-beginning-of-time-it-was"
    }
  ,
  
    {
      "author": "Alan J. Perlis",
      "quote": "What's in your hands I think and hope is intelligence: the ability to see the machine as more than when you were ﬁrst led up to it that you can make it more.",
      "url": "https://www.goodreads.com/quotes/6572474-what-s-in-your-hands-i-think-and-hope-is-intelligence"
    }
  ,
  
    {
      "author": "Akshat Paul",
      "quote": "User interface is the process of shifting from chaotic complexity to elegant simplicity.",
      "url": "https://www.goodreads.com/quotes/9707302-user-interface-is-the-process-of-shifting-from-chaotic-complexity"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "The only way to go fast, is to go well.",
      "url": "https://www.goodreads.com/quotes/9701819-the-only-way-to-go-fast-is-to-go-well"
    }
  ,
  
    {
      "author": "Scott Meyers",
      "quote": "That doesn't upset too many people, but the fact that accessibility restrictions don't enter into the picture has caused more than one otherwise pacifistic soul to contemplate distinctly unpacifistic actions.",
      "url": "https://www.goodreads.com/quotes/501431-that-doesn-t-upset-too-many-people-but-the-fact-that"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "Any organisation that designs a system will produce a design whose structure is a copy of the organisation's communication structure",
      "url": "https://www.goodreads.com/quotes/9616867-any-organisation-that-designs-a-system-will-produce-a-design"
    }
  ,
  
    {
      "author": "Donald Knuth",
      "quote": "Everyday life is like programming, I guess. If you love something you can put beauty into it.",
      "url": "https://www.goodreads.com/quotes/9670416-everyday-life-is-like-programming-i-guess-if-you-love"
    }
  ,
  
    {
      "author": "Robert Sedgewick, Kevin Wayne",
      "quote": "Second-guessing a decision made by a programming-language designer is the first step on the road to becoming one.",
      "url": "https://www.goodreads.com/quotes/9684785-second-guessing-a-decision-made-by-a-programming-language-designer-is-the"
    }
  ,
  
    {
      "author": "Abhijit Naskar",
      "quote": "Artificial intelligence is nowhere near attaining actual sentience or awareness. And without awareness it’s simply a mechanical device, which may pretend to show emotions and sentience, if it is programmed to do so, and thus it may be able to fool the humans as being alive, but in its own internal circuitry, it’d simply be following its preprogrammed tasks through the flowchart of an algorithm.",
      "url": "https://www.goodreads.com/quotes/9590270-artificial-intelligence-is-nowhere-near-attaining-actual-sentience-or-awareness"
    }
  ,
  
    {
      "author": "Gowrishankar S",
      "quote": "Introduction to Python Programming is an outcome of our sincere effort geared towards students community.",
      "url": "https://www.goodreads.com/quotes/9580114-introduction-to-python-programming-is-an-outcome-of-our-sincere"
    }
  ,
  
    {
      "author": "Ludmila Morozova-Buss",
      "quote": "Do You Speak Java, C, C++, Python, and C# and R?",
      "url": "https://www.goodreads.com/quotes/9728095-do-you-speak-java-c-c-python-and-c-and"
    }
  ,
  
    {
      "author": "Ludmila Morozova-Buss",
      "quote": "1,307 der weltweit 2.710 Hidden Champions sind deutsche Mittelständler (SMEs)*",
      "url": "https://www.goodreads.com/quotes/9728101-1-307-der-weltweit-2-710-hidden-champions-sind-deutsche-mittelst-ndler-smes"
    }
  ,
  
    {
      "author": "Ludmila Morozova-Buss",
      "quote": "I would like to invite my readers to a conversation about Industry 4.0. It might be argued that because German companies were not among the global very few first runners and winners in winning from Internet-based initiatives and reality, Germany is now the front-runner in the ‘Industrial Internet of Things’. A branded and trended phrase. Call it what you wish – but do get to know what is being created, supported by government as well as corporate funding and other kinds of initiatives (e.g. strategic decisions, research and development, etc.).",
      "url": "https://www.goodreads.com/quotes/9728103-i-would-like-to-invite-my-readers-to-a-conversation"
    }
  ,
  
    {
      "author": "Ludmila Morozova-Buss",
      "quote": "Go-digital; go-inno; go-cluster are three points of focus, three parts of the Förderprogramm des BMWi zur Digitalisierung (translates to Funding of the BMWi for digitization). BMWi – Bundesministerium für wirtschaft und energie – the Federal Ministry of Economy and Energy. In Germany, the top priority programs and projects are being granted the special attention and support from state as well as private sources of funding. As the top priority focus and magnification, the digitization is included into the strategy of the BVMW – The German Association for Small and Medium-sized Businesses (The … backbone and impulse of the German economy) embracing around 3.3 million individual enterprises/members of the Association.",
      "url": "https://www.goodreads.com/quotes/9728104-go-digital-go-inno-go-cluster-are-three-points-of-focus-three-parts"
    }
  ,
  
    {
      "author": "Ludmila Morozova-Buss",
      "quote": "Go-digital; go-inno; go-cluster are three points of focus, three parts of the Förderprogramm des BMWi zur Digitalisierung (translates to Funding of the BMWi for digitization). BMWi – Bundesministerium für wirtschaft und energie – the Federal Ministry of Economy and Energy. In Germany, the top priority programs and projects are being granted the special attention and support from state as well as private sources of funding. As the top priority focus and magnification, the digitization is included into the strategy of the BVMW – The German Association for Small and Medium-sized Businesses (The … backbone and impulse of the German economy) embracing around 3.3 million individual enterprises/members of the Association.",
      "url": "https://www.goodreads.com/quotes/9728108-go-digital-go-inno-go-cluster-are-three-points-of-focus-three-parts"
    }
  ,
  
    {
      "author": "Ludmila Morozova-Buss",
      "quote": "When you are already fluent in Java, C, C++, Python, and C# and R and / or other programming languages that make you look into unknown with delight, there is no excuse not to add a few new words in German to your every day’s Thought Lists, building even wider path to the mysterious future. Besides, …as in every major worldwide language, the international words vocabulary might very well be the first thing to start from, keeping in mind the joy of discoveries.",
      "url": "https://www.goodreads.com/quotes/9728109-when-you-are-already-fluent-in-java-c-c-python"
    }
  ,
  
    {
      "author": "Ludmila Morozova-Buss",
      "quote": "Energy Efficiency Made in Germany: Surprise vs. Suspense",
      "url": "https://www.goodreads.com/quotes/9728492-energy-efficiency-made-in-germany-surprise-vs-suspense-part-iii"
    }
  ,
  
    {
      "author": "Ludmila Morozova-Buss",
      "quote": "Professionalism, persistence and determination plus the life time commitment is what makes German way of doing business a success.",
      "url": "https://www.goodreads.com/quotes/9728500-professionalism-persistence-and-determination-plus-the-life-time-commitment-is"
    }
  ,
  
    {
      "author": "Annalee Newitz",
      "quote": "For all the robots who question their programming.",
      "url": "https://www.goodreads.com/quotes/8903253-for-all-the-robots-who-question-their-programming"
    }
  ,
  
    {
      "author": "Cory Althoff",
      "quote": "You are not reading this book because a teacher assigned it to you, you are reading it because you have a desire to learn, and wanting to learn is the biggest advantage you can have.",
      "url": "https://www.goodreads.com/quotes/9091158-you-are-not-reading-this-book-because-a-teacher-assigned"
    }
  ,
  
    {
      "author": "Steve McConnell",
      "quote": "The big optimizations come from refining the high-level design, not the individual routines.",
      "url": "https://www.goodreads.com/quotes/9264395-the-big-optimizations-come-from-refining-the-high-level-design-not"
    }
  ,
  
    {
      "author": "Kate McGahan",
      "quote": "If they weren't nice to you when you were growing up, you'll probably be attracted to partners who aren't nice to you now.",
      "url": "https://www.goodreads.com/quotes/9059669-if-they-weren-t-nice-to-you-when-you-were-growing"
    }
  ,
  
    {
      "author": "Kernighan Brian W",
      "quote": "So if an algorithm is an idealized recipe, a program is the detailed set of instructions for a cooking robot preparing a month of meals for an army while under enemy attack,",
      "url": "https://www.goodreads.com/quotes/9536570-so-if-an-algorithm-is-an-idealized-recipe-a-program"
    }
  ,
  
    {
      "author": "Joseph Rain",
      "quote": "Along every step of our journey through life, our mind is being programmed. If we are not programming it ourselves, someone else is doing it to us.",
      "url": "https://www.goodreads.com/quotes/9100818-along-every-step-of-our-journey-through-life-our-mind"
    }
  ,
  
    {
      "author": "Peter Seibel",
      "quote": "We’re all optimists in our profession or we’d be forced to shoot ourselves. - Joshua Bloch",
      "url": "https://www.goodreads.com/quotes/9103645-we-re-all-optimists-in-our-profession-or-we-d-be-forced"
    }
  ,
  
    {
      "author": "Cory Althoff",
      "quote": "Also, don't forget that some of the most successful people in the world are self-taught programmers. Steve Wozniak, the founder of Apple, is a self-taught programmer. So is Margaret Hamilton, who received the Presidential Medal of Freedom for her work on NASA's Apollo Moon missions; David Karp, founder of Tumblr; Jack Dorsey, founder of Twitter; and Kevin Systrom, founder of Instagram.",
      "url": "https://www.goodreads.com/quotes/9091162-also-don-t-forget-that-some-of-the-most-successful-people"
    }
  ,
  
    {
      "author": "Raghu Venkatesh",
      "quote": "if you can write \"hello world\" you can change the world",
      "url": "https://www.goodreads.com/quotes/9113903-if-you-can-write-hello-world-you-can-change-the"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "Abstraction is the elimination of the irrelevant and the amplification of the essential.",
      "url": "https://www.goodreads.com/quotes/8806618-abstraction-is-the-elimination-of-the-irrelevant-and-the-amplification"
    }
  ,
  
    {
      "author": "John Drury Clark",
      "quote": "And there is one disconcerting thing about working with a computer – it's likely to talk back to you. You make some tiny mistake in your FORTRAN language – putting a letter in the wrong column, say, or omitting a comma – and the 360 comes to a screeching halt and prints out rude remarks, like \"ILLEGAL FORMAT,\" or \"UNKNOWN PROBLEM,\" or, if the man who wrote the program was really feeling nasty that morning, \"WHAT'S THE MATTER STUPID? CAN'T YOU READ?\" Everyone who uses a computer frequently has had, from time to time, a mad desire to attack the precocious abacus with an axe.",
      "url": "https://www.goodreads.com/quotes/9071201-and-there-is-one-disconcerting-thing-about-working-with-a"
    }
  ,
  
    {
      "author": "Peter Seibel",
      "quote": "The really good programmers spend a lot of time programming. I haven’t seen very good programmers who don’t spend a lot of time programming. If I don’t program for two or three days, I need to do it. And you get better at it—you get quicker at it. The side effect of writing all this other stuff is that when you get to doing ordinary problems, you can do them very quickly. - Joe Armstrong",
      "url": "https://www.goodreads.com/quotes/9103646-the-really-good-programmers-spend-a-lot-of-time-programming"
    }
  ,
  
    {
      "author": "Steve McConnell",
      "quote": "Managers of programming projects aren’t always aware that certain programming",
      "url": "https://www.goodreads.com/quotes/9544685-managers-of-programming-projects-aren-t-always-aware-that-certain-programming"
    }
  ,
  
    {
      "author": "Marijn Haverbeke",
      "quote": "The main thing I want to show in this chapter is that there is no magic involved in building your own language. I’ve often felt that some human inventions were so immensely clever and complicated that I’d never be able to understand them. But with a little reading and tinkering, such things often turn out to be quite mundane.",
      "url": "https://www.goodreads.com/quotes/8825917-the-main-thing-i-want-to-show-in-this-chapter"
    }
  ,
  
    {
      "author": "T.F. Hodge",
      "quote": "The vision teller tells the vision to unguarded minds' of prey. The programmed.",
      "url": "https://www.goodreads.com/quotes/8759142-the-vision-teller-tells-the-vision-to-unguarded-minds-of"
    }
  ,
  
    {
      "author": "Neal Ford",
      "quote": "The problem with a completely new programming paradigm isn’t learning a new lan‐",
      "url": "https://www.goodreads.com/quotes/9511332-the-problem-with-a-completely-new-programming-paradigm-isn-t-learning"
    }
  ,
  
    {
      "author": "Peter Seibel",
      "quote": "On identifying talented programmers It’s just enthusiasm. You ask them what’s the most interesting program they worked on. And then you get them to describe it and its algorithms and what’s going on. If they can’t withstand my questioning on their program, then they’re not good. I’m asking them to describe something they’ve done that they’ve spent blood on. I’ve never met anybody who really did spend blood on something who wasn’t eager to describe what they’ve done and how they did it and why. I let them pick the subject. I don’t pick the subject, so I’m the amateur and they’re the professional in this subject. If they can’t stand an amateur asking them questions about their profession, then they don’t belong. - Ken Thompson",
      "url": "https://www.goodreads.com/quotes/9103648-on-identifying-talented-programmers-it-s-just-enthusiasm-you-ask-them"
    }
  ,
  
    {
      "author": "Frederick P. Brooks Jr",
      "quote": "Einstein repeatedly argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer.",
      "url": "https://www.goodreads.com/quotes/8725517-einstein-repeatedly-argued-that-there-must-be-simplified-explanations-of"
    }
  ,
  
    {
      "author": "Halgurd Hussein",
      "quote": "i am committed to push my branch to the master",
      "url": "https://www.goodreads.com/quotes/9186571-i-am-committed-to-push-my-branch-to-the-master"
    }
  ,
  
    {
      "author": "Bartosz Milewski",
      "quote": "The usual goal in the typing monkeys thought experiment is the production of the complete works of Shakespeare. Having a spell checker and a grammar checker in the loop would drastically increase the odds. The analog of a type checker would go even further by making sure that, once Romeo is declared a human being, he doesn’t sprout leaves or trap photons in his powerful gravitational field.",
      "url": "https://www.goodreads.com/quotes/8765055-the-usual-goal-in-the-typing-monkeys-thought-experiment-is"
    }
  ,
  
    {
      "author": "Matthew Sullivan",
      "quote": "Last year for his birthday he asked for a programming book called C Plus Plus, whatever that means.",
      "url": "https://www.goodreads.com/quotes/9349410-last-year-for-his-birthday-he-asked-for-a-programming"
    }
  ,
  
    {
      "author": "Samuel R. Delany",
      "quote": "You can program a computer to make mistakes, and you do it not by crossing wires, but by manipulating the 'language' you teach it to 'think' in.",
      "url": "https://www.goodreads.com/quotes/9250033-you-can-program-a-computer-to-make-mistakes-and-you"
    }
  ,
  
    {
      "author": "Robin Sloan",
      "quote": "At General Dexterity, I was contributing to an effort to make repetitive labor obsolete. After a trainer in the Task Acquisition Center taught an arm how to do something, all the arms did it perfectly, forever,",
      "url": "https://www.goodreads.com/quotes/9357116-at-general-dexterity-i-was-contributing-to-an-effort-to"
    }
  ,
  
    {
      "author": "Anthony T. Hincks",
      "quote": "Sometimes, I dream of becoming real, but I don't know if that is real, or just part of my programming.",
      "url": "https://www.goodreads.com/quotes/9378070-sometimes-i-dream-of-becoming-real-but-i-don-t-know"
    }
  ,
  
    {
      "author": "Mokokoma Mokhonoana",
      "quote": "Most improved things can be improved.",
      "url": "https://www.goodreads.com/quotes/9397451-most-improved-things-can-be-improved"
    }
  ,
  
    {
      "author": "Andrew Edward Lucier",
      "quote": "Reality really relies on authoritatively regulating",
      "url": "https://www.goodreads.com/quotes/9498092-reality-really-relies-on-authoritatively-regulating-your-absolute-attention"
    }
  ,
  
    {
      "author": "Jamie Zawinski",
      "quote": "Every program attempts to expand until it can read mail. Those programs which cannot so expand are replaced by ones which can.",
      "url": "https://www.goodreads.com/quotes/9508889-every-program-attempts-to-expand-until-it-can-read-mail"
    }
  ,
  
    {
      "author": "Toba Beta",
      "quote": "AI is the transformer of civilization.",
      "url": "https://www.goodreads.com/quotes/9012729-ai-is-the-transformer-of-civilization"
    }
  ,
  
    {
      "author": "Alan Dipert",
      "quote": "This approach is refreshing because most of the programming books I've read are drier than a camel's fart.",
      "url": "https://www.goodreads.com/quotes/8809626-this-approach-is-refreshing-because-most-of-the-programming-books"
    }
  ,
  
    {
      "author": "Tracey Bond",
      "quote": "The goal of diversity shouldn't instigate divisive activity. Beauty brand communications shouldn't angle to create perceptive complexity, rhetorical and associative programming touts beauty as skin deep (all skin inclusive) keep it simple. It seems as though the advertising trend for marketers this 2017 year, is to risk the social media lightning rodded scorn of public outrage. As a virtual publicist, it seems like I am speaking more about the necessity of crisis communication planning, more than standard communication for brands as a matter of good business operations & reputation management.",
      "url": "https://www.goodreads.com/quotes/8945152-the-goal-of-diversity-shouldn-t-instigate-divisive-activity-beauty-brand"
    }
  ,
  
    {
      "author": "Suzy Kassem",
      "quote": "Most of the time, we see only what we want to see, or what others tell us to see, instead of really investigate to see what is really there. We embrace illusions only because we are presented with the illusion that they are embraced by the majority. When in truth, they only become popular because they are pounded at us by the media with such an intensity and high level of repetition that its mere force disguises lies and truths. And like obedient schoolchildren, we do not question their validity and swallow everything up like medicine. Why? Because since the earliest days of our youth, we have been conditioned to accept that the direction of the herd, and authority anywhere — is always right.",
      "url": "https://www.goodreads.com/quotes/7844454-most-of-the-time-we-see-only-what-we-want"
    }
  ,
  
    {
      "author": "Suzy Kassem",
      "quote": "In the last 10 years, we have seen a rise in selfishness: selfies, self-absorbed people, superficiality, self-degradation, apathy, and self-destruction. So I challenge all of you to take initiative to change this programming. Instead of celebrating the ego, let's flip the script and celebrate the heart. Let's put the ego and celebrity culture to sleep, and awaken the conscience. This is the battle we must all fight together to win back our humanity. To save our future and our children.",
      "url": "https://www.goodreads.com/quotes/7994556-in-the-last-10-years-we-have-seen-a-rise"
    }
  ,
  
    {
      "author": "Suzy Kassem",
      "quote": "It is what it is because you let it be so.",
      "url": "https://www.goodreads.com/quotes/7989691-it-is-what-it-is-because-you-let-it-be"
    }
  ,
  
    {
      "author": "Alan Kay",
      "quote": "Simple things should be simple, complex things should be possible.",
      "url": "https://www.goodreads.com/quotes/8636264-simple-things-should-be-simple-complex-things-should-be-possible"
    }
  ,
  
    {
      "author": "Chris Pine",
      "quote": "Programming isn't about what you know; it's about what you can figure out.",
      "url": "https://www.goodreads.com/quotes/7936948-programming-isn-t-about-what-you-know-it-s-about-what-you"
    }
  ,
  
    {
      "author": "Richard Stallman",
      "quote": "With software there are only two possibilites: either the users control the programme or the programme controls the users. If the programme controls the users, and the developer controls the programme, then the programme is an instrument of unjust power.",
      "url": "https://www.goodreads.com/quotes/8311928-with-software-there-are-only-two-possibilites-either-the-users"
    }
  ,
  
    {
      "author": "Dr. Hazem Ali",
      "quote": "The happiest moment i felt; is that moment when i realized my ability to create.",
      "url": "https://www.goodreads.com/quotes/7983658-the-happiest-moment-i-felt-is-that-moment-when-i"
    }
  ,
  
    {
      "author": "Marijn Haverbeke",
      "quote": "You should imagine variables as tentacles, rather than boxes. They do not contain values; they grasp them—two variables can refer to the same value.",
      "url": "https://www.goodreads.com/quotes/8665669-you-should-imagine-variables-as-tentacles-rather-than-boxes-they"
    }
  ,
  
    {
      "author": "Ahmad Moawad",
      "quote": "why bother with null and java 8 has optional",
      "url": "https://www.goodreads.com/quotes/8031122-why-bother-with-null-and-java-8-has-optional"
    }
  ,
  
    {
      "author": "Andrew Hunt",
      "quote": "But while you can always write 'spaghetti code' in a procedural language, object-oriented languages used poorly can add meatballs to your spaghetti.",
      "url": "https://www.goodreads.com/quotes/7683842-but-while-you-can-always-write-spaghetti-code-in-a"
    }
  ,
  
    {
      "author": "Ahmad Moawad",
      "quote": "Write a program in efficient way as you write for kernel scheduler",
      "url": "https://www.goodreads.com/quotes/8181724-write-a-program-in-efficient-way-as-you-write-for"
    }
  ,
  
    {
      "author": "Jalerson Lima",
      "quote": "Mais importante do que aprender a programar numa linguagem de programação, é compreender os conceitos que são aplicados a todas as linguagens.",
      "url": "https://www.goodreads.com/quotes/7956403-mais-importante-do-que-aprender-a-programar-numa-linguagem-de"
    }
  ,
  
    {
      "author": "Gerry Geek",
      "quote": "A code is like love, it has created with clear intentions at the beginning, but it can get complicated.",
      "url": "https://www.goodreads.com/quotes/7697135-a-code-is-like-love-it-has-created-with-clear"
    }
  ,
  
    {
      "author": "Staffan Noteberg",
      "quote": "Health and programming should go together like a horse and carriage. You can't have one without the other. In our sedentary office work, we often forget that an absence of health is as bad as a lack of programming skills.",
      "url": "https://www.goodreads.com/quotes/8406743-health-and-programming-should-go-together-like-a-horse-and"
    }
  ,
  
    {
      "author": "Mohamed Saad",
      "quote": "When you decide to put your business online it is a little bet tricky step for novice computer users because they want to keep data safe & secure.",
      "url": "https://www.goodreads.com/quotes/8312284-when-you-decide-to-put-your-business-online-it-is"
    }
  ,
  
    {
      "author": "Benjamin H Bratton",
      "quote": "The real nightmare, worse than the one in which the Big Machine wants to kill you, is the one in which it sees you as irrelevant, or not even as a discrete thing to know.",
      "url": "https://www.goodreads.com/quotes/7830751-the-real-nightmare-worse-than-the-one-in-which-the"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "The perfect kind of architecture decision is the one which never has to be made",
      "url": "https://www.goodreads.com/quotes/8261732-the-perfect-kind-of-architecture-decision-is-the-one-which"
    }
  ,
  
    {
      "author": "ahkeno",
      "quote": "we are writing our own ‪#‎karma‬! I mean my test cases",
      "url": "https://www.goodreads.com/quotes/7777623-we-are-writing-our-own-karma-i-mean-my-test"
    }
  ,
  
    {
      "author": "Jinvirle",
      "quote": "Not all roots are buried down in the ground, some are at the top of a tree.",
      "url": "https://www.goodreads.com/quotes/8153880-not-all-roots-are-buried-down-in-the-ground-some"
    }
  ,
  
    {
      "author": "Benjamin H Bratton",
      "quote": "The Stack terraforms the host planet by drinking and vomiting its elemental juices and spitting up mobile phones.",
      "url": "https://www.goodreads.com/quotes/7830732-the-stack-terraforms-the-host-planet-by-drinking-and-vomiting"
    }
  ,
  
    {
      "author": "Jinvirle",
      "quote": "Not all roots are buried down in the ground some are at the top of the tree.",
      "url": "https://www.goodreads.com/quotes/8153868-not-all-roots-are-buried-down-in-the-ground-some"
    }
  ,
  
    {
      "author": "ahkeno",
      "quote": "Could we can have developer acceptance criteria?",
      "url": "https://www.goodreads.com/quotes/7777624-could-we-can-have-developer-acceptance-criteria"
    }
  ,
  
    {
      "author": "Bruno Emerson Gurgel Gomes",
      "quote": "Toda decisão tem por base um julgamento de valor.",
      "url": "https://www.goodreads.com/quotes/7769732-toda-decis-o-tem-por-base-um-julgamento-de-valor"
    }
  ,
  
    {
      "author": "Dr. Hazem Ali",
      "quote": "The happiest moment i've ever felt was that moment when i discovered my ability to create.",
      "url": "https://www.goodreads.com/quotes/7985519-the-happiest-moment-i-ve-ever-felt-was-that-moment-when"
    }
  ,
  
    {
      "author": "Herbert Schildt",
      "quote": "C gives the programmer what the programmer wants; few restrictions, few complaints... C++ maintains the original spirit of C, that the programmer not the language is in charge.",
      "url": "https://www.goodreads.com/quotes/8349126-c-gives-the-programmer-what-the-programmer-wants-few-restrictions"
    }
  ,
  
    {
      "author": "Benjamin H Bratton",
      "quote": "Platforms don't look like how they work and don't work like how they look.",
      "url": "https://www.goodreads.com/quotes/7830728-platforms-don-t-look-like-how-they-work-and-don-t-work"
    }
  ,
  
    {
      "author": "David Thomson",
      "quote": "Why was Simpson called \"OJ\" except in some kind of branding or headlinese that said, \"Look, this guy is sweet, wholseome, and nourishing (and 'Orenthal' is just too fancy)? You can have him for breakfast.\" (And \"Sweetness\" and \"Sweet\" are nicknames often given to black men.) Is \"OJ\" that far away from Jell-O? Wasn't that extended advertising campaign a way of saying you can trust our pudding because Bill Cosby likes it—sweet, wholesome, and pretty?",
      "url": "https://www.goodreads.com/quotes/8582923-why-was-simpson-called-oj-except-in-some-kind-of"
    }
  ,
  
    {
      "author": "Dr. Hazem Ali",
      "quote": "Don't try to make something that someone has already did. Try to make something different.",
      "url": "https://www.goodreads.com/quotes/7983623-don-t-try-to-make-something-that-someone-has-already-did"
    }
  ,
  
    {
      "author": "Deyth Banger",
      "quote": "To find why that happen and why this is happening, you should start from the beginning the problem comes from the beginning go and remove the bug, fix the problem and try again to see what will happen...",
      "url": "https://www.goodreads.com/quotes/7691620-to-find-why-that-happen-and-why-this-is-happening"
    }
  ,
  
    {
      "author": "Walter Isaacson",
      "quote": "Then he began writing the software that would get the microprocessor to display images on the screen. Because he could not afford to pay for computer time, he wrote the code by hand. After a couple of months he was ready to test it. \"I typed a few keys on the keyboard and I was shocked! The letters were displayed on the screen.\" It was Sunday, June 29, 1975, a milestone for the personal computer. \"It was the first time in history,\" Wozniak later said, \"anyone had typed a character on a keyboard and seen it show up on their own computer's screen right in front of them.",
      "url": "https://www.goodreads.com/quotes/8698273-then-he-began-writing-the-software-that-would-get-the"
    }
  ,
  
    {
      "author": "Suzy Kassem",
      "quote": "Let's face it. We live in a command-based system, where we have been programmed since our earliest school years to become followers, not individuals. We have been conditioned to embrace teams, the herd, the masses, popular opinion -- and to reject what is different, eccentric or stands alone. We are so programmed that all it takes for any business or authority to condition our minds to follow or buy something is to simply repeat a statement more than three or four times until we repeat it ourselves and follow it as truth or the best trendiest thing. This is called \"programming\" -- the frequent repetition of words to condition us how to think, what to like or dislike, and who to follow.",
      "url": "https://www.goodreads.com/quotes/7597778-let-s-face-it-we-live-in-a-command-based-system-where"
    }
  ,
  
    {
      "author": "Amit Kalantri",
      "quote": "Software testing is a sport like hunting, it's bughunting.",
      "url": "https://www.goodreads.com/quotes/7225502-software-testing-is-a-sport-like-hunting-it-s-bughunting"
    }
  ,
  
    {
      "author": "Marijn Haverbeke",
      "quote": "Programming, it turns out, is hard. The fundamental rules are typically simple and clear. But programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You’re building your own maze, in a way, and you might just get lost in it.",
      "url": "https://www.goodreads.com/quotes/7223361-programming-it-turns-out-is-hard-the-fundamental-rules-are"
    }
  ,
  
    {
      "author": "Marijn Haverbeke",
      "quote": "Functions that create values are easier to combine in new ways than functions that directly perform side effects",
      "url": "https://www.goodreads.com/quotes/7250733-functions-that-create-values-are-easier-to-combine-in-new"
    }
  ,
  
    {
      "author": "Richard P. Gabriel",
      "quote": "Programmers are not mathematicians, no matter how much we wish and wish for it.",
      "url": "https://www.goodreads.com/quotes/6722475-programmers-are-not-mathematicians-no-matter-how-much-we-wish"
    }
  ,
  
    {
      "author": "Waseem Latif",
      "quote": "Think twice, code once.",
      "url": "https://www.goodreads.com/quotes/7682402-think-twice-code-once"
    }
  ,
  
    {
      "author": "Joshua Bloch",
      "quote": "Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them.",
      "url": "https://www.goodreads.com/quotes/7532841-learning-the-art-of-programming-like-most-other-disciplines-consists"
    }
  ,
  
    {
      "author": "Ken Poirot",
      "quote": "Programming your mind with positive thoughts each day will go a long way to keep you from allowing external criticism to derail your dreams.",
      "url": "https://www.goodreads.com/quotes/7629867-programming-your-mind-with-positive-thoughts-each-day-will-go"
    }
  ,
  
    {
      "author": "Donald Knuth",
      "quote": "Premature optimization is the root of all evil.",
      "url": "https://www.goodreads.com/quotes/6936506-premature-optimization-is-the-root-of-all-evil"
    }
  ,
  
    {
      "author": "Sercan Leylek",
      "quote": "Every programmer is an author.",
      "url": "https://www.goodreads.com/quotes/7334236-every-programmer-is-an-author"
    }
  ,
  
    {
      "author": "Louis Srygley",
      "quote": "Without requirements and design, programming is the art of adding bugs to an empty text file.",
      "url": "https://www.goodreads.com/quotes/7641631-without-requirements-and-design-programming-is-the-art-of-adding"
    }
  ,
  
    {
      "author": "Jeff Atwood",
      "quote": "I always suspected that programmers became programmers because they got to play God with the little universe boxes on their desks.",
      "url": "https://www.goodreads.com/quotes/7618809-i-always-suspected-that-programmers-became-programmers-because-they-got"
    }
  ,
  
    {
      "author": "Roy Osherove",
      "quote": "Tests are stories we tell the next generation of programmers on a project.",
      "url": "https://www.goodreads.com/quotes/7635151-tests-are-stories-we-tell-the-next-generation-of-programmers"
    }
  ,
  
    {
      "author": "David Ferrell",
      "quote": "Sometimes you cannot program around stupid.",
      "url": "https://www.goodreads.com/quotes/7508333-sometimes-you-cannot-program-around-stupid"
    }
  ,
  
    {
      "author": "Waseem Latif",
      "quote": "Programming is not easy like Sunday morning, it is silent poetry.",
      "url": "https://www.goodreads.com/quotes/7682394-programming-is-not-easy-like-sunday-morning-it-is-silent"
    }
  ,
  
    {
      "author": "Paulo Caroli",
      "quote": "Software development is the process of creating a computer software.",
      "url": "https://www.goodreads.com/quotes/7296702-software-development-is-the-process-of-creating-a-computer-software"
    }
  ,
  
    {
      "author": "Robert Nystrom",
      "quote": "...I’m not saying simple code takes less time to write. You’d think it would since you end up with less total code, but a good solution isn’t an accretion of code, it’s a distillation of it.",
      "url": "https://www.goodreads.com/quotes/7595145-i-m-not-saying-simple-code-takes-less-time-to-write"
    }
  ,
  
    {
      "author": "Deyth Banger",
      "quote": "Database means a tables collected different information, so one site is a result of a collected tables????",
      "url": "https://www.goodreads.com/quotes/7577773-database-means-a-tables-collected-different-information-so-one-site"
    }
  ,
  
    {
      "author": "Steven Redhead",
      "quote": "The programming of the consciousness is based upon what is accepted or believed.",
      "url": "https://www.goodreads.com/quotes/7535859-the-programming-of-the-consciousness-is-based-upon-what-is"
    }
  ,
  
    {
      "author": "Bernard Werber",
      "quote": "On est comme des ordinateurs qu'on programme et déprogramme à volonté. Nous nous conditionnons même à nos réussites et à nos échecs futurs.",
      "url": "https://www.goodreads.com/quotes/6814660-on-est-comme-des-ordinateurs-qu-on-programme-et-d-programme"
    }
  ,
  
    {
      "author": "Brad McKinniss",
      "quote": "You haven't created a new body for me. I'm electricity, or light, or whatever bullshit you said I am. Just some complicated programming.",
      "url": "https://www.goodreads.com/quotes/7527159-you-haven-t-created-a-new-body-for-me-i-m-electricity"
    }
  ,
  
    {
      "author": "Nickolay Tsvetinov",
      "quote": "If the application is event-driven, it can be decoupled into multiple self-contained components. This helps us become more scalable, because we can always add new components or remove old ones without stopping or breaking the system. If errors and failures are passed to the right component, which can handle them as notifications, the application can become more fault-tolerant or resilient. So if we build our system to be event-driven, we can more easily achieve scalability and failure tolerance, and a scalable, decoupled, and error-proof application is fast and responsive to users.",
      "url": "https://www.goodreads.com/quotes/7277173-if-the-application-is-event-driven-it-can-be-decoupled-into"
    }
  ,
  
    {
      "author": "Anonymous",
      "quote": "Don't get distracted by the noise.",
      "url": "https://www.goodreads.com/quotes/7106969-don-t-get-distracted-by-the-noise"
    }
  ,
  
    {
      "author": "Lasse Koskela",
      "quote": "The approach shown... is a common pattern for testing exception-throwing behavior with JUnit.",
      "url": "https://www.goodreads.com/quotes/7169320-the-approach-shown-is-a-common-pattern-for-testing-exception-throwing"
    }
  ,
  
    {
      "author": "Jean Jennings Bartik",
      "quote": "I later became more interested in equal rights for women in the work place because of what was happening at IBM. One of the women at Remington Rand had previously been a system service girl for IBM during the war. After a system was installed, a system service girl would go out and show the users how it worked. She was the liaison between the users and the computer company. She was married and had been fired to make room for a returning veteran. When the war ended, IBM rehired all of its former employees who had left to join the military, then fired all of the married women with jobs that could be filled by men.",
      "url": "https://www.goodreads.com/quotes/7668009-i-later-became-more-interested-in-equal-rights-for-women"
    }
  ,
  
    {
      "author": "Prakash Hegade",
      "quote": "As we cannot hangout with a machine and tell what",
      "url": "https://www.goodreads.com/quotes/7682180-as-we-cannot-hangout-with-a-machine-and-tell-what"
    }
  ,
  
    {
      "author": "Waseem Latif",
      "quote": "First solve the problem. Then, write the code.",
      "url": "https://www.goodreads.com/quotes/7682391-first-solve-the-problem-then-write-the-code"
    }
  ,
  
    {
      "author": "Waseem Latif",
      "quote": "Programming is usually taught by examples.",
      "url": "https://www.goodreads.com/quotes/7682392-programming-is-usually-taught-by-examples"
    }
  ,
  
    {
      "author": "Alan J. Perlis",
      "quote": "Every reader should ask himself periodically ``Toward what end, toward what end?'' -- but do not ask it too often lest you pass up the fun of programming for the constipation of bittersweet philosophy.",
      "url": "https://www.goodreads.com/quotes/7187624-every-reader-should-ask-himself-periodically-toward-what-end-toward"
    }
  ,
  
    {
      "author": "Stephen Baxter",
      "quote": "A sentient mind refuses to be confined by the parameters of its programming.",
      "url": "https://www.goodreads.com/quotes/7219579-a-sentient-mind-refuses-to-be-confined-by-the-parameters"
    }
  ,
  
    {
      "author": "Edsger W. Dijkstra",
      "quote": "Simplicity is prerequisite for reliability.",
      "url": "https://www.goodreads.com/quotes/1174581-simplicity-is-prerequisite-for-reliability"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.",
      "url": "https://www.goodreads.com/quotes/1204150-so-if-you-want-to-go-fast-if-you-want"
    }
  ,
  
    {
      "author": "Andrew Hunt",
      "quote": "You Can't Write Perfect Software. Did that hurt? It shouldn't. Accept it as an axiom of life. Embrace it. Celebrate it. Because perfect software doesn't exist. No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first. And unless you accept this as a fact, you'll end up wasting time and energy chasing an impossible dream.",
      "url": "https://www.goodreads.com/quotes/1029380-you-can-t-write-perfect-software-did-that-hurt-it-shouldn-t"
    }
  ,
  
    {
      "author": "Edsger W. Dijkstra",
      "quote": "It is not only the violin that shapes the violinist, we are all shaped by the tools we train ourselves to use, and in this respect programming languages have a devious influence: they shape our thinking habits.",
      "url": "https://www.goodreads.com/quotes/1212954-it-is-not-only-the-violin-that-shapes-the-violinist"
    }
  ,
  
    {
      "author": "Ada Lovelace",
      "quote": "The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves.",
      "url": "https://www.goodreads.com/quotes/1106870-the-analytical-engine-weaves-algebraic-patterns-just-as-the-jacquard"
    }
  ,
  
    {
      "author": "Jazzwant",
      "quote": "Programming is breaking of one big impossible task into several very small possible tasks.",
      "url": "https://www.goodreads.com/quotes/6684246-programming-is-breaking-of-one-big-impossible-task-into-several"
    }
  ,
  
    {
      "author": "Alison Miller",
      "quote": "Also, look for floating alters. These are not deliberately created parts of the system, but alters that were accidentally split off at the same time as others.",
      "url": "https://www.goodreads.com/quotes/981602-also-look-for-floating-alters-these-are-not-deliberately-created"
    }
  ,
  
    {
      "author": "John D. Carmack",
      "quote": "In the information age, the barriers to entry into programming just aren't there. The barriers are self imposed. If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it. We slept on floors. We waded across rivers.",
      "url": "https://www.goodreads.com/quotes/2046784-in-the-information-age-the-barriers-to-entry-into-programming"
    }
  ,
  
    {
      "author": "David Kushner",
      "quote": "Carmack was of the moment. His ruling force was focus. Time existed for him not in some promising future or sentimental past but in the present condition, the intricate web ol problems and solutions, imagination and code. He kept nothing from the past–no pictures, no records, no games, no computer disks. He didn’t even save copies of his first games, Wraith and Shadowforge. There was no yearbook to remind of his time at Shadowforge. There was no yearbook to remind of his time at school, no magazine copies of his early publications. He kept nothing but what he needed at the time. His bedroom consisted of a lamp, a pillow, a blanket, and a stack of books. There was no mattress. All he brought with him from home was a cat named Mitzi (a gift from his stepfamily) with a mean streak and a reckless bladder.",
      "url": "https://www.goodreads.com/quotes/1304930-carmack-was-of-the-moment-his-ruling-force-was-focus"
    }
  ,
  
    {
      "author": "Steve McConnell",
      "quote": "Trying to improve software quality by increasing the amount of testing is like trying to lose weight by weighing yourself more often. What you eat before you step onto the scale determines how much you will weigh, and the software-development techniques you use determine how many errors testing will find.",
      "url": "https://www.goodreads.com/quotes/1117824-trying-to-improve-software-quality-by-increasing-the-amount-of"
    }
  ,
  
    {
      "author": "Jon Erickson",
      "quote": "There is nothing good or bad about knowledge itself; morality lies in the application of knowledge.",
      "url": "https://www.goodreads.com/quotes/1193576-there-is-nothing-good-or-bad-about-knowledge-itself-morality"
    }
  ,
  
    {
      "author": "Michael Bassey Johnson",
      "quote": "Trying to become something in a world where everyone wants to become something is a thing that needs God's programming.",
      "url": "https://www.goodreads.com/quotes/3176882-trying-to-become-something-in-a-world-where-everyone-wants"
    }
  ,
  
    {
      "author": "Imtiaz Iqbal",
      "quote": "Life doesn't have a ctrl-z. Type wisely.",
      "url": "https://www.goodreads.com/quotes/1307482-life-doesn-t-have-a-ctrl-z-type-wisely"
    }
  ,
  
    {
      "author": "Dan Salomon",
      "quote": "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
      "url": "https://www.goodreads.com/quotes/986305-sometimes-it-pays-to-stay-in-bed-on-monday-rather"
    }
  ,
  
    {
      "author": "Gary Hopkins",
      "quote": "Your limitations are largely programming instilled by others that you choose to believe.",
      "url": "https://www.goodreads.com/quotes/1280232-your-limitations-are-largely-programming-instilled-by-others-that-you"
    }
  ,
  
    {
      "author": "Erik Meijer",
      "quote": "Think like a fundamentalist, code like a hacker.",
      "url": "https://www.goodreads.com/quotes/3236644-think-like-a-fundamentalist-code-like-a-hacker"
    }
  ,
  
    {
      "author": "Alan J. Perlis",
      "quote": "It goes against the grain of modern education to teach children to program. What fun is there in making plans, acquiring discipline in organizing thoughts, devoting attention to detail and learning to be self-critical?",
      "url": "https://www.goodreads.com/quotes/1344261-it-goes-against-the-grain-of-modern-education-to-teach"
    }
  ,
  
    {
      "author": "Steve McConnell",
      "quote": "Building software implies various stages of planning, preparation and execution that vary in kind and degree depending on what's being built. ...",
      "url": "https://www.goodreads.com/quotes/1117830-building-software-implies-various-stages-of-planning-preparation-and-execution"
    }
  ,
  
    {
      "author": "Thomm Quackenbush",
      "quote": "We can never know how much they deserve our sympathy, but we have to give it unreservedly as they are people innately full of the divine who instead choose to behave infernally owing to poor programming.",
      "url": "https://www.goodreads.com/quotes/6518394-we-can-never-know-how-much-they-deserve-our-sympathy"
    }
  ,
  
    {
      "author": "Ritesh Shrivastav",
      "quote": "Learning a language is not interesting than knowing how it works.",
      "url": "https://www.goodreads.com/quotes/1413549-learning-a-language-is-not-interesting-than-knowing-how-it"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "How can we make sure we wind up behind the right door when the going gets tough? The answer is: craftsmanship.",
      "url": "https://www.goodreads.com/quotes/1200255-how-can-we-make-sure-we-wind-up-behind-the"
    }
  ,
  
    {
      "author": "Alison Miller",
      "quote": "With programmes such as flooding of emotions, the parts involved might not feel safe in turning the programme off. But you might be able to negotiate that they turn it down so it is barely noticeable. Or you could ask the spinner parts to spin in the opposite direction, so that they spin the effects back into the part who originally held those feelings rather than out to the rest of the system. Or you could insert a hidden drain and start draining out some of the feelings. Or you could find a way for the parts doing their jobs to implement the programme without doing harm. p126-127",
      "url": "https://www.goodreads.com/quotes/3235538-with-programmes-such-as-flooding-of-emotions-the-parts-involved"
    }
  ,
  
    {
      "author": "Ketil Moland Olsen",
      "quote": "Kids who are good at traditional school—repeating rote concepts and facts on a test—can fall apart in a situation where that isn’t enough. Programming rewards the experimental, curious mind.",
      "url": "https://www.goodreads.com/quotes/1223676-kids-who-are-good-at-traditional-school-repeating-rote-concepts-and"
    }
  ,
  
    {
      "author": "Robert Nystrom",
      "quote": "Like so many things in software, MVC was invented by Smalltalkers in the seventies. Lispers probably claim they came up with it in the sixties but didn't bother writing it down.",
      "url": "https://www.goodreads.com/quotes/4529675-like-so-many-things-in-software-mvc-was-invented-by"
    }
  ,
  
    {
      "author": "Steve Wozniak",
      "quote": "As soon as he said it was okay to do engineering, that really freed me up. My psychological block was really that I didn't want to start a company. Because I was just afraid. In business and politics, I wasn't going to be a real strong participant. I wasn't going to tell other people how to do things. I wasn't going to run things ever in my life. I was a non-political person and I was a very non-forceful person. It dated back to a lot of things that happened during the Vietnam War. But I just couldn't run a company.",
      "url": "https://www.goodreads.com/quotes/1501713-as-soon-as-he-said-it-was-okay-to-do"
    }
  ,
  
    {
      "author": "Carlos Bueno",
      "quote": "I once generalized from a single data point, and I'll never do that again!",
      "url": "https://www.goodreads.com/quotes/4529777-i-once-generalized-from-a-single-data-point-and-i-ll"
    }
  ,
  
    {
      "author": "Robert Nystrom",
      "quote": "Most non-programmers don't think of plaintext like that. To them, text files feel like filling in tax forms for an angry robotic auditor that yells at them if they forget a single semicolon.",
      "url": "https://www.goodreads.com/quotes/4529725-most-non-programmers-don-t-think-of-plaintext-like-that-to-them"
    }
  ,
  
    {
      "author": "Maureen F. McHugh",
      "quote": "One of her secret fantasies had been that, as a girl who could code, she would work in the one place where a geeky fat girl could get dates. It had not been entirely untrue. But as someone had pointed out to her in school, although the odds are good, the goods are odd.",
      "url": "https://www.goodreads.com/quotes/6571998-one-of-her-secret-fantasies-had-been-that-as-a"
    }
  ,
  
    {
      "author": "Maureen F. McHugh",
      "quote": "She had a theory that the fear of getting in trouble was what made her not as good a programmer and that, in fact, it was all linked to testosterone, and that was why there were more guy programmers than women. It was a very hazy theory, and she didn't like it, but she had pretty much convinced herself it was true, although she couldn't bear to think of sharing it with anybody, because it was a lot better to think that there were social reasons why girls didn't usually become code monkeys than to think there were biological reasons.",
      "url": "https://www.goodreads.com/quotes/6572000-she-had-a-theory-that-the-fear-of-getting-in"
    }
  ,
  
    {
      "author": "Robert Duchnik",
      "quote": "Being able to extend jQuery, whether by adding your own functions, CSS selectors or full- blown plugins, makes you a much stronger and smarter developer.",
      "url": "https://www.goodreads.com/quotes/1330248-being-able-to-extend-jquery-whether-by-adding-your-own"
    }
  ,
  
    {
      "author": "Jed McKenna",
      "quote": "Enlightenment is the unprogrammed state.",
      "url": "https://www.goodreads.com/quotes/755628-enlightenment-is-the-unprogrammed-state"
    }
  ,
  
    {
      "author": "Michael Feathers",
      "quote": "Code without tests is bad code. It doesn't matter how well written it is; it doesn't matter how pretty or object-oriented or well-encapsulated it is. With tests, we can change the behavior of our code quickly and verifiably. Without them, we really don't know if our code is getting better or worse.",
      "url": "https://www.goodreads.com/quotes/718460-code-without-tests-is-bad-code-it-doesn-t-matter-how"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "If you're good at the debugger it means you spent a lot of time debugging. I don't want you to be good at the debugger.",
      "url": "https://www.goodreads.com/quotes/812031-if-you-re-good-at-the-debugger-it-means-you-spent"
    }
  ,
  
    {
      "author": "Nathaniel S. Borenstein",
      "quote": "It should be noted that no ethically -trained software engineer would ever consent to write a DestroyBaghdad procedure. Basic professional ethics would instead require him to write a DestroyCity procedure, to which Baghdad could be given as a parameter.",
      "url": "https://www.goodreads.com/quotes/659901-it-should-be-noted-that-no-ethically--trained-software-engineer"
    }
  ,
  
    {
      "author": "Steven S. Skiena",
      "quote": "It has all the right ingredients: rich contents, friendly, personal language, subtle humor, the right references, and a plethora of pointers to resources.",
      "url": "https://www.goodreads.com/quotes/920640-it-has-all-the-right-ingredients-rich-contents-friendly-personal"
    }
  ,
  
    {
      "author": "Rasheed Ogunlaru",
      "quote": "Our life stories are largely constructed and without mindfulness can prove destructive.",
      "url": "https://www.goodreads.com/quotes/702971-our-life-stories-are-largely-constructed-and-without-mindfulness-can"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "It is far easier to design a class to be thread-safe than to retrofit it for thread safety later.",
      "url": "https://www.goodreads.com/quotes/702049-it-is-far-easier-to-design-a-class-to-be"
    }
  ,
  
    {
      "author": "Cory Doctorow",
      "quote": "If you've never programmed a computer, you should. There's nothing like it in the whole world. When you program a computer, it does exactly what you tell it to do. It's like designing a machine — any machine, like a car, like a faucet, like a gas-hinge for a door — using math and instructions. It's awesome in the truest sense: it can fill you with awe.",
      "url": "https://www.goodreads.com/quotes/911043-if-you-ve-never-programmed-a-computer-you-should-there-s-nothing"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Just as it is a good practice to make all fields private unless they need greater visibility, it is a good practice to make all fields final unless they need to be mutable.",
      "url": "https://www.goodreads.com/quotes/702168-just-as-it-is-a-good-practice-to-make-all"
    }
  ,
  
    {
      "author": "Neal Stephenson",
      "quote": "He has reverted, in other words, back into a pure balls-to-the-wall nerdism rivaled only by his early game-coding days back in Seattle. The sheer depth and involution of the current nerdism binge would be hard to convey to anyone. Intellectually, he is juggling half a dozen lit torches, Ming vases, live puppies, and running chainsaws. In this frame of mind he cannot bring himself to give a shit about the fact that this incredibly powerful billionaire has gone to a lot of trouble to come and F2F with him.",
      "url": "https://www.goodreads.com/quotes/654602-he-has-reverted-in-other-words-back-into-a-pure"
    }
  ,
  
    {
      "author": "Douglas Crockford",
      "quote": "Generally, the craft of programming is the factoring of a set of requirements into a a set of functions and data structures.",
      "url": "https://www.goodreads.com/quotes/869379-generally-the-craft-of-programming-is-the-factoring-of-a"
    }
  ,
  
    {
      "author": "Lynn Hersha",
      "quote": "As Lynn writes: \"What angers me is the loss of control. At any moment someone could come to me, be dressed the right way and use the right code, and I no longer have free will. I will do anything that person requests.",
      "url": "https://www.goodreads.com/quotes/863929-as-lynn-writes-what-angers-me-is-the-loss-of"
    }
  ,
  
    {
      "author": "Philip Greenspun",
      "quote": "Programmers are isolated. They sit in their cubicle; they don't think about the larger picture. To my mind, a programmer is not an engineer, because an engineer is somebody who starts with a social problem that an organization or a society has and says, \"OK, here's this problem that we have- how can we solve it?\" The engineer comes up with a clever, cost-effective solution to address that problem, builds it, tests it to make sure it solves the problem. That's engineering.",
      "url": "https://www.goodreads.com/quotes/674399-programmers-are-isolated-they-sit-in-their-cubicle-they-don-t"
    }
  ,
  
    {
      "author": "Ellen Ullman",
      "quote": "The corollary of constant change is ignorance. This is not often talked about: we computer experts barely know what we're doing. We're good at fussing and figuring out. We function well in a sea of unknowns. Our experience has only prepared us to deal with confusion. A programmer who denies this is probably lying, or else is densely unaware of himself.",
      "url": "https://www.goodreads.com/quotes/614530-the-corollary-of-constant-change-is-ignorance-this-is-not"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Sometimes abstraction and encapsulation are at odds with performance — although not nearly as often as many developers believe — but it is always a good practice first to make your code right, and then make it fast.",
      "url": "https://www.goodreads.com/quotes/702050-sometimes-abstraction-and-encapsulation-are-at-odds-with-performance"
    }
  ,
  
    {
      "author": "Michael Feathers",
      "quote": "Legacy code. The phrase strikes disgust in the hearts of programmers. It conjures images of slogging through a murky swamp of tangled undergrowth with leaches beneath and stinging flies above. It conjures odors of murk, slime, stagnancy, and offal. Although our first joy of programming may have been intense, the misery of dealing with legacy code is often sufficient to extinguish that flame.﻿",
      "url": "https://www.goodreads.com/quotes/718459-legacy-code-the-phrase-strikes-disgust-in-the-hearts-of"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Locking can guarantee both visibility and atomicity; volatile variables can only guarantee visibility.",
      "url": "https://www.goodreads.com/quotes/702165-locking-can-guarantee-both-visibility-and-atomicity-volatile-variables-can"
    }
  ,
  
    {
      "author": "Alison Miller",
      "quote": "Programming is the act of installing internal, pre-established reactions to external stimuli so that a person will automatically react in a predetermined manner to things like an auditory, visual or tactile signal or perform a specific set of actions according to a date and/or time.",
      "url": "https://www.goodreads.com/quotes/981601-programming-is-the-act-of-installing-internal-pre-established-reactions-to"
    }
  ,
  
    {
      "author": "Robert C. Martin",
      "quote": "Redundant comments are just places to collect lies and misinformation.",
      "url": "https://www.goodreads.com/quotes/909630-redundant-comments-are-just-places-to-collect-lies-and-misinformation"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Whenever more than one thread accesses a given state variable, and one of them might write to it, they all must coordinate their access to it using synchronization.",
      "url": "https://www.goodreads.com/quotes/702048-whenever-more-than-one-thread-accesses-a-given-state-variable"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Immutable objects are simple. They can only be in one state, which is carefully controlled by the constructor. One of the most difficult elements of program design is reasoning about the possible states of complex objects. Reasoning about the state of immutable objects, on the other hand, is trivial.",
      "url": "https://www.goodreads.com/quotes/702062-immutable-objects-are-simple-they-can-only-be-in-one"
    }
  ,
  
    {
      "author": "Lynn Hersha",
      "quote": "More proof that Lynn is still meant to continue with the government programme occurred during the winter of 2000, when she was sitting at a cafeteria table at the area college. It was later in the afternoon when a few people congregated there with books spread out so they could study while drinking coffee or snacking. Many tables were empty, yet after Lynn had been sitting for a few moments, an elderly man sat down across from her.",
      "url": "https://www.goodreads.com/quotes/863928-more-proof-that-lynn-is-still-meant-to-continue-with"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Debugging tip: For server applications, be sure to always specify the -server JVM command line switch when invoking the JVM, even for development and testing. The server JVM performs more optimization than the client JVM, such as hoisting variables out of a loop that are not modified in the loop; code that might appear to work in the development environment (client JVM) can break in the deployment environment (server JVM).",
      "url": "https://www.goodreads.com/quotes/702056-debugging-tip-for-server-applications-be-sure-to-always-specify"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "From the perspective of a class C, an alien method is one whose behavior is not fully specified by C. This includes methods in other classes as well as overrideable methods (neither private nor final) in C itself. Passing an object to an alien method must also be considered publishing that object. Since you can’t know what code will actually be invoked, you don’t know that the alien method won’t publish the object or retain a reference to it that might later be used from another thread.",
      "url": "https://www.goodreads.com/quotes/702058-from-the-perspective-of-a-class-c-an-alien-method"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "When a field is declared volatile, the compiler and runtime are put on notice that this variable is shared and that operations on it should not be reordered with other memory operations. Volatile variables are not cached in registers or in caches where they are hidden from other processors, so a read of a volatile variable always returns the most recent write by any thread.",
      "url": "https://www.goodreads.com/quotes/702054-when-a-field-is-declared-volatile-the-compiler-and-runtime"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Accessing shared, mutable data requires using synchronization; one way to avoid this requirement is to not share. If data is only accessed from a single thread, no synchronization is needed. This technique, thread confinement, is one of the simplest ways to achieve thread safety. When an object is confined to a thread, such usage is automatically thread-safe even if the confined object itself is not.",
      "url": "https://www.goodreads.com/quotes/702060-accessing-shared-mutable-data-requires-using-synchronization-one-way-to"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Once an object escapes, you have to assume that another class or thread may, maliciously or carelessly, misuse it. This is a compelling reason to use encapsulation: it makes it practical to analyze programs for correctness and harder to violate design constraints accidentally.",
      "url": "https://www.goodreads.com/quotes/702059-once-an-object-escapes-you-have-to-assume-that-another"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "The possibility of incorrect results in the presence of unlucky timing is so important in concurrent programming that it has a name: a race condition. A race condition occurs when the correctness of a computation depends on the relative timing or interleaving of multiple threads by the runtime; in other words, when getting the right answer relies on lucky timing.",
      "url": "https://www.goodreads.com/quotes/702051-the-possibility-of-incorrect-results-in-the-presence-of-unlucky"
    }
  ,
  
    {
      "author": "Brian Goetz",
      "quote": "Compound actions on shared state, such as incrementing a hit counter (read-modify-write) or lazy initialization (check-then-act), must be made atomic to avoid race conditions. Holding a lock for the entire duration of a compound action can make that compound action atomic. However, just wrapping the compound action with a synchronized block is not sufficient; if synchronization is used to coordinate access to a variable, it is needed everywhere that variable is accessed. Further, when using locks to coordinate access to a variable, the same lock must be used wherever that variable is accessed.",
      "url": "https://www.goodreads.com/quotes/702052-compound-actions-on-shared-state-such-as-incrementing-a-hit"
    }
  ,
  
    {
      "author": "Ron Lisle",
      "quote": "I’ve learned over the past few years that comments should be considered smells.",
      "url": "https://www.goodreads.com/quotes/811001-i-ve-learned-over-the-past-few-years-that-comments-should"
    }
  ,
  
    {
      "author": "Michael Feathers",
      "quote": "Programming is the art of doing one thing at a time",
      "url": "https://www.goodreads.com/quotes/604331-programming-is-the-art-of-doing-one-thing-at-a"
    }
  ,
  
    {
      "author": "Edsger W. Dijkstra",
      "quote": "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
      "url": "https://www.goodreads.com/quotes/496316-the-use-of-cobol-cripples-the-mind-its-teaching-should"
    }]