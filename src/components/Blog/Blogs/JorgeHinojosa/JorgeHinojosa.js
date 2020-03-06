import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JorgeHinojosa.scss";
import Footer from "../../../Footer/Footer";

export default class JorgeHinojosa extends Component {
  constructor() {
    super();
    this.state = { readytouse: null };
  }

  render() {
    return (
      <div className="entire-blog-page">
        <div className="blog-info-container">
          <h1 className="blog-header">
            This Developer Graduated Bootcamp And Landed A Job At Match.com
          </h1>
          <hr className="blog-divider"></hr>
          {/* <h2>Bootcamp Grad or Self-Taught Developer?</h2> */}
          <h2 className="blog-paragraph-header">
            Hey Jorge, can you tell us a little bit about yourself and your
            journey to becoming a developer?
            <br></br>
          </h2>
          <div className="blog-paragraph-div">
            <p>
              For sure! Thanks for having me by the way, I appreciate your time.
              <br></br>
              <br></br>
              So I’m Dallas born and bred. I graduated SMU in 2017, where I
              studied Economics and Advertising. After graduating, I worked for
              my family’s business in the service industry, where I helped
              manage a bar for two years. That was enough time to decide I
              wanted something different, and it sure wasn’t going to be a
              career in Finance.
              <br></br>
              <br></br>
              It was then that I’d developed an interest in coding video games
              in my spare time. I built a space shooter kind of like Galaga and
              a platformer as well. That experience got me hooked on coding so I
              looked into potential careers and boot camps.
              <br></br>
              <br></br>I decided web development was the right choice for me and
              I signed up for DevMountain after about three months of coding and
              researching on my own. It definitely has been one of the best
              decisions I’ve ever made.
              <br></br>
              <br></br>
              Outside of programming, I am an active musician, songwriter, and
              producer. Mostly indie guitar pop and rock. I am also a Nintendo
              fanboy and a wannabe photographer
            </p>
          </div>
          <h2 className="blog-paragraph-header">
            Would you say that having a background in a different field, like
            economics, is beneficial when becoming a developer?
            <br></br>
          </h2>
          <div className="blog-paragraph-div">
            <p>
              Oh absolutely! Economics is very heavy on math and theory, so that
              computational and logical way of thinking has served me very well
              in picking up the more technical side of being a dev.
              <br></br>
              <br></br>
              Advertising taught me the importance of having the consumer and
              their needs in mind, and at Match and all consumer-facing product
              companies that’s what drives decisions every day.
              <br></br>
              <br></br>
              Lastly, I’d say working in a bar for two years has actually been
              incredibly helpful! The people skills I learned in the service
              industry have been crucial in being able to work in teams. So
              thankful I did that, and I’ll carry those lessons with me always.
            </p>
          </div>
          <h2 className="blog-paragraph-header">
            You are extremely passionate about music. Were you able to integrate
            your passion for music with learning to code?
            <br></br>
          </h2>
          <div className="blog-paragraph-div">
            <p>
              Definitely. One of the first things we were told when starting the
              course at DevMountain was that there’d be a personal project. I
              knew immediately what I wanted to make. I had an idea for a
              file-management and versioning app for music producers.
              <br></br>
              <br></br>
              Essentially as a user, you could post a music project you were
              working on and invite your friends onto that project. Your friend
              could then download the project, tweak it, re-upload to the site
              and the site would create a new version entry under that project’s
              page. That way you’d never tarnish the original or any subsequent
              versions. This allows the user to see the progression of their
              project and jump back to any previous version just in case they
              liked a certain mix better or preferred a certain vocal take, for
              example.
              <br></br>
              <br></br>I called the app TapeDeck. I look back on it now and it’s
              pretty buggy! But I loved it at the time and it ended up winning
              Best Overall Personal Project at DevMountain.
            </p>
          </div>
          <h2 className="blog-paragraph-header">
            What are your favorite online resources? Are there any Youtube
            channels or blogs you would recommend?
            <br></br>
          </h2>
          <div className="blog-paragraph-div">
            <p>
              TECHLEAD. Slightly joking… YouTube is honestly my favorite place
              to get information on technologies I am learning because I am a
              visual learner. I like seeing someone explain the code in detail,
              so I can code along and get used to what I am working on, always
              with the docs open in another tab. Favorite channels include
              Clement Mihailescu and Programming with Mosh.
              <br></br>
              <br></br>
              StackOverflow is great for weird bugs I may be working on. Often
              I’ll paste into the search bar the exact error I am looking at,
              and it just pops up on StackOverflow. Thank you dev angels!
              <br></br>
              <br></br>
              Twitter is where all the devs hang out and is a great place to
              keep up with trends in tech. I’d advise following prominent devs
              that use technologies that you use and go from there! Favorites
              for React updates are Dan Abrimov (@dan_abrimov) and Ryan Florence
              (@ryanflorence).
            </p>
          </div>
          <h2 className="blog-paragraph-header">
            What were your biggest struggles when learning to code and how did
            you get past them?
            <br></br>
          </h2>
          <div className="blog-paragraph-div">
            <p>
              My biggest struggle as a boot camper was keeping up with the pace
              of the program. We’d learn concepts and use them that day and
              often not get back to them for another week or so. The way I got
              past that was by keeping calm and trying to not let myself get
              overwhelmed, which is easier said than done.
              <br></br>
              <br></br>I would tell myself that it’s okay if I didn’t grasp a
              concept that day, but I sure as hell would learn the syntax. By
              repeating and practicing syntax first, my understanding of the
              concepts came with time.
              <br></br>
              <br></br>
              Might not be the best way, but that was my approach and it’s
              served me well even in my current gig.
            </p>
          </div>
          <h2 className="blog-paragraph-header">
            After graduating from DevMountain bootcamp, how did you land your
            first job as a developer?
            <br></br>
          </h2>
          <div className="blog-paragraph-div">
            <p>
              I was fortunate enough to meet a Match recruiter at one of
              DevMountain’s Meet and Hire events during my mentorship.
              <br></br>
              <br></br>
              The recruiter was about to leave but he spotted my Pokedex project
              that I’d built and he walked over to me. He told me that the team
              he recruits for is obsessed with Pokemon and that he had to show
              my app to them. Definitely lucked out there, and I can proudly say
              that my Pokefandom got me my first dev job.
              <br></br>
              <br></br>
              It also helped that I was able to engage the recruiter and explain
              the technologies I had used to build my project.
            </p>
          </div>
          <h2 className="blog-paragraph-header">
            What advice would you give to someone that is currently on the job
            search, and is having trouble because they don’t have job experience
            or a CS degree?
            <br></br>
          </h2>
          <div className="blog-paragraph-div">
            <p>
              I would say the biggest driver to landing a gig is a personal
              connection, and by that, I don’t mean you have to already know
              someone that can help you. What I mean is make yourself known.
              Network, network, network!
              <br></br>
              <br></br>Meet people at meetups, make friends with people at
              coffee shops, keep in touch with past classmates and friends. You
              never know where and when an opportunity will pop up, and you
              should be prepared. The best way to be prepared is to never stop
              learning! Get better at your favorite framework, experiment with
              new technologies, and BUILD PROJECTS. Build as many projects as
              you can and you will be surprised by your improvement.
              <br></br>
              <br></br>
              Even if it’s the boring To-Do list app we all love, make it
              prettier and more badass each time you build it. Or take my idea
              and build a Pokedex!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
