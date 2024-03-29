import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import blogPicture from "../../assets/switching careers thumbnail.jpeg";
import { useNavigate } from "react-router-dom";
import "/Users/l/portfolio-website/src/pages/Blog Pages/HowISwitchedCareers2TimesAndGotADeveloperJob.css";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";

export const sidebarLeft = styled.div`
  left: -300px;
  width: 300px;
  height: 100%;
  z-index: -1;
`;

export const StyledDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #171d20;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #171d20;
  color: white;
  padding: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 425px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const NavBarLink = styled.a`
  cursor: pointer;
  height: 100%;
  max-width: 100%;
  color: #fff;
  font-weight: 900;
  font-size: 1.3rem;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    font-size: 1.5rem;
    transition: 0.3s;
  }
  @media (max-width: 425px) {
    margin: none;
  }
`;

const SwitchingCareers = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#171d20" }}>
        <div className="flexOne"></div>
        <StyledDiv className="flexOne">
          <h1 className="blogTitles">
            How I Switched Careers 2 Times And Became A Self-Taught Developer
          </h1>
          <StyledDiv>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              {/* <img src={blogPicture} alt="switching careers blog picture" /> */}

              <Image thumbnail src={blogPicture} className="blogImage" />

              <p className="blogParagraph" style={{ marginTop: "3rem" }}>
                Looking at the title looks crazy to me. If you’re an employer,
                you probably think I’m not the best applicant considering the
                title.
              </p>
              <p className="blogParagraph">
                If you’re looking at this as someone who wants to transition as
                a developer, you’re probably wondering what I did to get here.
              </p>
              <p className="blogParagraph">
                Trust me when I say it wasn’t easy at all. There was a lot of
                confusion, anxiety, and regret to get where I am today. I’m not
                saying I’m successful at all though, but I can confidently say
                I’m in a position where I’m happy.
              </p>
              <p className="blogParagraph">
                A lot of this post is me detailing my journey through my
                different careers. If you want the full backstory, keep reading.
                If you want the part on how I got into tech from marketing,
                scroll down to the coding title.
              </p>
              <br />
              <h2 className="blogTitles">Accounting</h2>
              <br />
              <p className="blogParagraph">
                Let’s start with how I got into accounting first. When I look
                back on it now, I can honestly say it was a mistake because I
                did it for the wrong reasons.
              </p>
              <p className="blogParagraph">
                Having job security is a reason a lot of people choose jobs, and
                that’s the main reason I chose accounting. I’m not saying it’s
                wrong to choose a job based on job security, but job security
                isn’t enough for me to work at my craft unsolicited. Personally,
                if I want to get good at something, I need to put in the extra
                hours.
              </p>
              <p className="blogParagraph">
                What I should’ve done is be completely honest with myself. I
                should’ve asked myself if I actually enjoyed the work
                accountants do.
              </p>
              <p className="blogParagraph">
                The most excited I got about accounting was when I looked at the
                financial statements. Credits and debits never caught my
                attention. In fact, everything else besides looking at financial
                statements was uninteresting to me. I should’ve taken this as a
                red flag.
              </p>
              <p className="blogParagraph">
                Another sign I should’ve known accounting wasn’t for me was when
                I thought of accounting as a stepping stone instead of a career.
                Picturing myself as a partner was fun, but picturing myself
                doing the actual work was another story.
              </p>
              <p className="blogParagraph">
                After ignoring all these signs I still went through with it. I
                spent the next year studying for the CPA, and barely failing
                both exams I took. All I did was study during that year. For
                those wondering, this was 2017 right after graduating college.
              </p>
              <p className="blogParagraph">
                After failing those CPA exams I got tired of being broke, so I
                finally got an accounting job in early 2018 which I should’ve
                done earlier. The job was an internship in a public accounting
                firm which gave me good experience, but didn’t give me the whole
                perspective of what being an accountant entailed.
              </p>
              <p className="blogParagraph">
                Fast forward to the end of the tax season and my internship
                ends. I dreaded going back into the job process again.
              </p>
              <p className="blogParagraph">
                After spending months looking for another job I found one in
                September 2018. This time it was a full-time opportunity. The
                team was friendly but the work was harder. Looking back at it,
                my internship role was more of a data entry job. This time I had
                to be more cognizant of the rules within tax which required more
                studying.
              </p>
              <p className="blogParagraph">
                And to be honest, I didn’t have the motivation to study for
                anything tax related after work. A good sign you’re genuinely
                interested in something is when you pay attention to the small
                details, but that wasn’t there at all for me when it came to
                accounting.
              </p>
              <p className="blogParagraph">
                I remember going to a tax conference to learn the new tax rules
                and wanting to leave before it even started. Going to work was
                another drag. Getting ready to go to work wearing uncomfortable
                clothes and taking Bart (subway system) which is always dirty
                was not fun.
              </p>
              <p className="blogParagraph">
                During my time at this job I always tried on the work I was
                given. But there’s a limit to how well you’ll do when you don’t
                put in the extra time to work on your skills.
              </p>
              <p className="blogParagraph">
                Again, I had to be honest with myself. I had to face the reality
                that I wasted 4 years pursuing a career I wasn’t head over heels
                for. Besides not admitting I was wrong about the career decision
                I made, I was letting sunk cost fallacy get in the way.
              </p>
              <p className="blogParagraph">I had to ask myself 2 questions.</p>
              <p className="blogParagraph">
                What’s worse, continuing a job you’re not into because I made
                this huge commitment? Or, admitting you made a mistake and
                changing directions?
              </p>
              <p className="blogParagraph">
                I never want ego to be the reason I make bad decisions because
                that’s self-inflicted. Framing my situation like that made it
                easy to make a decision. So 4 months into the job I finally
                realized accounting wasn’t the right fit and transitioned.
              </p>
              <br />
              <h2 className="blogTitles">Marketing</h2>
              <br />
              <p className="blogParagraph">
                Transitioning to marketing wasn’t on my mind when I left
                accounting. I didn’t have an immediate plan when I should have.{" "}
              </p>
              <p className="blogParagraph">
                During this time, I was working on a project of my own that I
                started in 2018. The basis of the project was to generate
                passive income through affiliate marketing on my website.
              </p>
              <p className="blogParagraph">
                To get people on my website I used content marketing. I was
                willing to do this project just to have some money even if I
                didn’t like it but through the process, I found out marketing is
                something I enjoy.
              </p>
              <p className="blogParagraph">
                Doing keyword research, researching competitors, and figuring
                out a strategy to get people’s attention was fun. This got me
                thinking of a move into marketing. By this time I had thousands
                of people coming to my website which gave me the confidence to
                apply.
              </p>
              <p className="blogParagraph">
                Not only was I getting interviews, but I was getting actual
                experience working on my site and helping another local
                business.
              </p>
              <p className="blogParagraph">
                Doing all this helped me land a job at a startup. I was in a
                small office with 3 other people and the office itself wasn’t
                big. But working at this startup gave me a chance to learn a lot
                at a fast pace. Startups need people to wear multiple hats so I
                wasn’t just doing search engine optimization (SEO). I had a hand
                in building communities, email marketing, influencer outreach,
                and more.
              </p>
              <p className="blogParagraph">
                My time in 2 weeks at this startup was much more enjoyable than
                my time spent in both accounting roles combined. I was working a
                job I found enjoyable with people I liked. Everything was going
                good but there was always a lingering thought.
              </p>
              <p className="blogParagraph">
                Ever since I graduated college I wanted to learn how to program.
                This sounds pretty bad but I was even trying to learn code while
                studying for my CPA which was just dumb. I never went further
                than learning variables for Python though because studying for
                the CPA is a job in itself.
              </p>
              <p className="blogParagraph">
                During my commute to and from my marketing job I was always on
                Twitter. I wasn't looking for memes or sports news though. I was
                lurking Tech Twitter. This community is just what it sounds
                like. A community filled with people either in tech, or
                interested in breaking into tech.
              </p>
              <p className="blogParagraph">
                It seemed like every week I would run across a thread of someone
                who recently broke into the industry and them explaining how
                they did it. This gave me the encouragement to look into how I
                could do it. YouTube videos telling people how long it took for
                them to learn code varied though.{" "}
              </p>
              <p className="blogParagraph">
                The time ranges for learning code went from 3 to 9 months.
                Hearing that made me second guess if I should actually learn
                code. I figured this was something that would take me a while to
                accomplish but with my job and side project, I figured I didn’t
                have the time.
              </p>
              <p className="blogParagraph">
                Scrolling through articles and watching YouTubers share their
                journey was something I did throughout my whole marketing stint.
                What pushed me from observing to action were a couple factors.
              </p>
              <p className="blogParagraph">
                The first were personal health reasons, and the second was a
                strong thought that I wanted to be a builder of some sorts.
                Watching others accomplish what I wanted gave me the confidence
                necessary to take this leap.
              </p>
              <p className="blogParagraph">
                I knew I wanted to learn code but had no idea where to start.
                With no clear direction on where to go I did what anyone would
                do, I quit my job to pursue something that I didn’t think I was
                qualified for.
              </p>
              <br />
              <h2 className="blogTitles">Coding</h2>
              <br />
              <p className="blogParagraph">
                Taking some time off to recover before starting something new
                was important for me. It gave me time to think through what I
                was going to do. The only problem was I didn’t do enough
                thinking because I tried to teach myself SQL first.
              </p>
              <p className="blogParagraph">
                Writing this now I’m trying to remember why I was teaching
                myself SQL, but let’s just say that was a mistake. After doing
                more research the right move was to learn HTML, CSS, and
                JavaScript as my foundation. In the Fall of 2020, I officially
                began my journey as a self-taught developer.
              </p>
              <p className="blogParagraph">
                I started learning the basics of HTML, CSS, and JavaScript
                through Treehouse. It was just enough material to help me get
                started making small projects. With the help of Frontend Mentor,
                I was able to apply my skills to actual projects. What’s cool
                about Frontend Mentor is that they provide solutions so when
                you’re stuck, you always have something to fall back on.
              </p>
              <p className="blogParagraph">
                I was excited to learn all this “new” technology which made it
                easy to progress. But that progression slowed down when I
                actually had to use JavaScript in my projects.
              </p>
              <p className="blogParagraph">
                I would struggle for hours and sometimes make no progress with
                JavaScript. These types of situations were good because I was
                going through the struggle all programmers go through.
              </p>
              <p className="blogParagraph">
                When the calendar hit Spring 2021, I was inconsistent due to
                procrastination and life happening. I would code for a day and
                stop for the next 2-3 days. This didn’t kill my overall progress
                though. I eventually picked up the pace once I got comfortable
                and decided to learn libraries.
              </p>
              <p className="blogParagraph">
                I didn’t know anything about libraries once I started learning
                the fundamentals. If you look at job postings though you’ll see
                a lot of postings wanting people with React, Vue, or Angular
                skills. The most in-demand out of all 3 was React so I started
                building projects with React.
              </p>
              <p className="blogParagraph">
                React has a learning curve but it wasn’t as steep as JavaScript
                since React is built on JavaScript. During this time, I kept
                learning and building but knew my routine wasn’t enough to land
                a job.
              </p>
              <p className="blogParagraph">
                The next best step was to do some freelancing. To do this I
                reached out to people I knew and offered to build them sites.
                The best people to target for this type of work are
                professionals with white-collar jobs because there’s a good
                chance they have a portfolio which they can use on their site.
              </p>
              <p className="blogParagraph">
                Freelancing was a great opportunity to actually put myself to
                the test. It was also something I could talk about in
                interviews. From here, this is when I pivoted to reaching out to
                people.
              </p>
              <p className="blogParagraph">
                While thinking of how to network the answer was in front of my
                face the whole time. Twitter is what jump started my journey and
                is the community to join if you’re trying to break into tech.
                I’ve been able to message high-level executives, recruiters,
                founders, and more.
              </p>
              <p className="blogParagraph">
                It’s also a great way to find people who are on the same journey
                as you. Everybody who wants to break into tech wants to connect
                with people who are already there. The most underrated and most
                valuable relationships I got from Tech Twitter were from the
                people who were on the same journey as me.
              </p>
              <p className="blogParagraph">
                To this day, I have friends whom I’ve met from Twitter that I
                still keep in touch with. The people who’ve already done what
                you want to get done can help, but the people who are in the
                same boat can empathize with your struggle, and that’s all you
                need sometimes.
              </p>
              <p className="blogParagraph">
                Building my skills and being active on Twitter got the ball
                rolling. The only problem was I wasn’t applying still. There
                were conditions in place that prevented my family from being
                above a certain income threshold.
              </p>
              <p className="blogParagraph">
                This is another factor that made me procrastinate. Knowing I
                wouldn’t be able to land a full-time job for at least a year
                plus put me through tough times mentally. Imagine explaining to
                employers why you switched careers multiple times and having
                huge gaps in your resume while switching careers multiple times.
              </p>
              <p className="blogParagraph">
                Not only did I have an unfavorable resume, but there were times
                where I didn’t know for certain I was learning the right
                technology. Tech moves so fast nowadays and you hear about
                developers using this tech or that tech it’s easy to get lost.
              </p>
              <p className="blogParagraph">
                My biggest mistake was not applying to jobs sooner. All the
                reasons I said above made me not want to apply. I thought, "what
                is the point if I can’t even accept an offer?"
              </p>
              <p className="blogParagraph">
                It’s easy to tell yourself you need to do more, but that’s
                another form of procrastination. Thankfully, one of my best
                friends told me I should apply anyway for practice.{" "}
              </p>
              <p className="blogParagraph">
                For anyone reading this, the single biggest thing you can do to
                improve your chances of getting in the industry is applying.
                It’s so obvious but it holds a lot of people back. Even if you
                don’t get a job right away, you’ll be gaining valuable practice
                interviewing.
              </p>
              <p className="blogParagraph">
                At this point I’m networking/applying to jobs in the morning and
                building the rest of the day. To give you an idea of the
                timeframe, it’s the Fall of 2021 where this was my daily
                schedule. I even kept a spreadsheet to keep track of all the
                applications I sent.
              </p>
              <p className="blogParagraph">
                One problem that kept happening was not being able to land one
                single interview for months. When you go this long without an
                interview it’s time to look at your resume and change some
                things. I had people who I met on Twitter take a look at my
                resume and they recommended some tweaks.
              </p>
              <p className="blogParagraph">
                Making those changes helped me land interviews. The next step
                was to get interviews consistently. Doing a video chat with one
                Twitter friend helped me achieve this. She told me to start
                “building in public”. I always saw this concept on Twitter and
                it made sense, but I only thought of posting videos when my
                projects were done.
              </p>
              <p className="blogParagraph">
                This is where my marketing brain kicked in. The target audience
                for me was recruiters and I wanted them to keep me top of mind
                when thinking of software engineers. To do that, I have to be
                active, and a great way to stay active is to show my projects
                via video.
              </p>
              <p className="blogParagraph">
                Posting videos got me more interviews. I also signed up for
                LinkedIn Premium to see if what I was doing was working, and
                once I started posting more my profile was getting more
                attention. Creating content and getting my engagement up made me
                realize my marketing stint wasn’t a waste of time. It actually
                proved valuable in this case.
              </p>
              <p className="blogParagraph">
                I have to admit though, I felt cringey posting videos, but
                sometimes you can’t care what people think. The sole purpose of
                “building in public” is to show people your skills and receive
                feedback.
              </p>
              <p className="blogParagraph">
                To add more fuel to the fire, I messaged recruiters via LinkedIn
                and connected with more developers. My daily routine consisted
                of 50% marketing and 50% building during this timeframe.
              </p>
              <p className="blogParagraph">
                My money was getting low at this time too so I had to get a
                part-time job around February where I worked a couple times a
                week. My sleep schedule would be wrecked but funny enough,
                that’s a great time to focus because no one is awake. I used
                this time to create more videos and post them on LinkedIn.
              </p>
              <p className="blogParagraph">
                I remember looking at my spreadsheet of jobs and the total
                amount of jobs I applied to was 500+. I was able to get
                interviews but not one offer came from that. It hurt looking at
                that spreadsheet. Another thing was seeing your friends who you
                started the journey with get jobs.
              </p>
              <p className="blogParagraph">
                I wasn’t jealous, but it made me think “what was wrong with me?”
                I was literally doing everything possible. But as my friend told
                me “It can be your turn, but not your time, or it can be your
                time, but not your turn, it has to be both!”
              </p>
              <p className="blogParagraph">
                During this time, my income threshold situation didn’t have a
                clear end in sight so this made me feel like I was wasting time
                again.
              </p>
              <p className="blogParagraph">
                Fast forward to May 2022 and this is where my personal life
                combined with the job hunt made me want to take a break. It was
                nearing 2 years of learning code and still no job. That thought
                gave me deep anxiety, but it pushed me.
              </p>
              <p className="blogParagraph">
                I didn’t want to take a break but decided a change of scenery
                was necessary. So in May I took a short trip to Las Vegas to
                visit family.
              </p>
              <p className="blogParagraph">
                By the third day I was there I scheduled a phone call with a
                recruiter. He didn’t dive too deep into my background, all he
                wanted to know was what technology I knew. I told him what I
                knew and next thing I knew I had a technical interview the next
                day.
              </p>
              <p className="blogParagraph">
                Now I’m wondering what’s going on. I wanted this interview, but
                I was nervous to accept it. I asked friends if I should even go
                to it. All of them said yes emphatically. So knowing I only had
                one day to prepare I just looked at the job posting and only saw
                2 technologies I knew. My first thought was this interview was
                going to suck.
              </p>
              <p className="blogParagraph">
                Long story short, I did my interview and it went surprisingly
                well. The interview lasted less than an hour and it wasn’t as
                technical as I thought it was.
              </p>
              <p className="blogParagraph">
                After the interview, I treated myself to a nice breakfast which
                lasted about 30 minutes and right as I walked up the stairs I
                got a call. I answered it and am confused as to who it is.
              </p>
              <p className="blogParagraph">
                The person on the other side was telling me how they wanted to
                hire me, but I couldn’t remember any other companies that I was
                waiting for a call on. It turns out, it was the company I
                literally just interviewed with!
              </p>
              <p className="blogParagraph">
                I was so giddy I told all the people close to me. I literally
                got out of the house just to aimlessly drive around Vegas
                shouting in excitement. Another thought I had was how much of a
                mistake it would be if I didn’t take the interview just because
                I didn’t think I would do well.{" "}
              </p>
              <p className="blogParagraph">
                Reflecting back on it there were a couple things I did well in
                the interview. The first was when I admitted I didn’t know
                something. Whenever he asked a technical question I just said “I
                don’t know.” Talking about something you don’t know only makes
                you look worse.
              </p>
              <p className="blogParagraph">
                The second was I proved to him I could code by showing him the
                current project I was working on at the time. What was important
                was not only showing him my project but taking the initiative to
                show him.{" "}
              </p>
              <p className="blogParagraph">
                If I didn’t do that the interview would just be him asking me
                technical questions. The best way to show someone you can code
                is to take them through your code.
              </p>
              <p className="blogParagraph">
                There’s a part of me that feels like I got lucky, but I know I
                put in a lot of work to get myself in that position.
              </p>
              <p className="blogParagraph">
                One idea I want people wanting to break into tech to remember is
                to go to every interview. It doesn't matter if you don't know
                jack, interviewing, just like coding is a skill. The more
                practice you get, the better you'll be.
              </p>
              <p className="blogParagraph">
                Reflecting back on this journey made me realize I took the
                hardest road. If I had the money, I would definitely have taken
                a bootcamp. Not only do you get structure, but there's a
                built-in network of people who can help you get a job.
              </p>
              <p className="blogParagraph">
                Even though a bootcamp would've been better, I don't regret my
                decision to go the self-taught route. It gave me a boost of
                confidence knowing I can achieve difficult goals when I stick my
                mind to it.
              </p>
              <p className="blogParagraph">
                When I think about it, all developers are self-taught to a
                point. When you're on the job you still have to teach yourself
                new skills. Being self-taught instilled the right mentality in
                me.
              </p>
              <p className="blogParagraph">
                I hope this post gives other people wanting to break into the
                industry some hope and tips they can use.
              </p>
              <p className="blogParagraph">
                I'll be posting more on this blog and am open to freelancing
                projects. Just hit the mail icon below and message me something!
                :)
              </p>
              <p className="blogParagraph">
                Even if you're not offering me a project, I'm always open to
                meet new people. You can email me or connect with me on Twitter!
              </p>
            </div>
          </StyledDiv>
        </StyledDiv>
        <div className="flexOne"></div>
      </div>
      <div style={{ height: "100%", backgroundColor: "#171d20" }}>
        <Footer />
      </div>
    </>
  );
};

export default SwitchingCareers;
