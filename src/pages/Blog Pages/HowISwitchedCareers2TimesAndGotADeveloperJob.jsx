import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import blogPicture from "../../assets/switching careers thumbnail.jpeg";
import { useNavigate } from "react-router-dom";
import TableOfContents from "../../components/TableOfContents/TableOfContents";

export const StyledDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #171d20;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

  const navigateToBlog = () => {
    navigate("/blog");
  };

  return (
    <div style={{ display: "flex" }}>
      <StyledDiv></StyledDiv>
      <StyledDiv>
        <NavBarContainer>
          <p>Alex Cortez</p>
          <NavBarLinkContainer>
            <NavBarLink
              onClick={navigateToHome}
              style={{ marginRight: "1rem" }}
            >
              Home
            </NavBarLink>
            <NavBarLink
              onClick={navigateToBlog}
              style={{ marginRight: "1rem" }}
            >
              Blog
            </NavBarLink>
          </NavBarLinkContainer>
        </NavBarContainer>
        <h1>How I Switched Careers 2 Times And Got A Developer Job</h1>}
        <div
          style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
        >
          {/* <img src={blogPicture} alt="switching careers blog picture" /> */}
          <Image thumbnail src={blogPicture} />
        </div>
        <TableOfContents />
        <p style={{ textAlign: "left" }}>
          Looking at the title looks crazy to me. If you’re an employer, you
          probably think I’m not the best applicant considering the title.
        </p>
        <p style={{ textAlign: "left" }}>
          If you’re looking at this as someone who wants to transition as a
          developer, you’re probably wondering what I did to get here.
        </p>
        <p style={{ textAlign: "left" }}>
          Trust me when I say it wasn’t easy at all. There was a lot of
          confusion, anxiety, and regret to get where I am today. I’m not saying
          I’m successful at all though, but I can confidently say I’m in a
          position where I’m happy.
        </p>
        <p style={{ textAlign: "left" }}>
          A lot of this post is me detailing my journey through my different
          careers. If you want the full backstory, keep reading. If you want the
          part on how I got into tech from marketing, scroll down to the coding
          title.
        </p>
        <h2 style={{ color: "white", margin: "auto" }}>Accounting</h2>
        <p style={{ textAlign: "left" }}>
          Let’s start with how I got into accounting first. When I look back on
          it now, I can honestly say it was a mistake because I did it for the
          wrong reasons.
        </p>
        <p style={{ textAlign: "left" }}>
          Having job security is a reason a lot of people choose jobs, and
          that’s the main reason I chose accounting. I’m not saying it’s wrong
          to choose a job based on job security, but job security isn’t enough
          for me to work at my craft unsolicited. Personally, if I want to get
          good at something, I need to put in the extra hours.
        </p>
        <p style={{ textAlign: "left" }}>
          What I should’ve done is be completely honest with myself. I should’ve
          asked myself if I actually enjoyed the work accountants do.
        </p>
        <p style={{ textAlign: "left" }}>
          The most excited I got about accounting was when I looked at the
          financial statements. Credits and debits never caught my attention. In
          fact, everything else besides looking at financial statements was
          uninteresting to me. I should’ve taken this as a red flag.
        </p>
        <p style={{ textAlign: "left" }}>
          Another sign I should’ve known accounting wasn’t for me was when I
          thought of accounting as a stepping stone instead of a career.
          Picturing myself as a partner was fun, but picturing myself doing the
          actual work was another story.
        </p>
        <p style={{ textAlign: "left" }}>
          After ignoring all these signs I still went through with it. I spent
          the next year studying for the CPA, and barely failing both exams I
          took. All I did was study during that year. For those wondering, this
          was 2017 right after graduating college.
        </p>
        <p style={{ textAlign: "left" }}>
          After failing those CPA exams I got tired of being broke, so I finally
          got an accounting job in early 2018 which I should’ve done earlier.
          The job was an internship in a public accounting firm which gave me
          good experience, but didn’t give me the whole perspective of what
          being an accountant entailed.
        </p>
        <p style={{ textAlign: "left" }}>
          Fast forward to the end of the tax season and my internship ends. I
          dreaded going back into the job process again.
        </p>
        <p style={{ textAlign: "left" }}>
          After spending months looking for another job I found one in September
          2018. This time it was a full-time opportunity. The team was friendly
          but the work was harder. Looking back at it, my internship role was
          more of a data entry job. This time I had to be more cognizant of the
          rules within tax which required more studying.
        </p>
        <p style={{ textAlign: "left" }}>
          And to be honest, I didn’t have the motivation to study for anything
          tax related after work. A good sign you’re genuinely interested in
          something is when you pay attention to the small details, but that
          wasn’t there at all for me when it came to accounting.
        </p>
        <p style={{ textAlign: "left" }}>
          I remember going to a tax conference to learn the new tax rules and
          wanting to leave before it even started. Going to work was another
          drag. Getting ready to go to work wearing uncomfortable clothes and
          taking Bart (subway system) which is always dirty was not fun.
        </p>
        <p style={{ textAlign: "left" }}>
          During my time at this job I always tried on the work I was given. But
          there’s a limit to how well you’ll do when you don’t put in the extra
          time to work on your skills.
        </p>
        <p style={{ textAlign: "left" }}>
          Again, I had to be honest with myself. I had to face the reality that
          I wasted 4 years pursuing a career I wasn’t head over heels for.
          Besides not admitting I was wrong about the career decision I made, I
          was letting sunk cost fallacy get in the way.
        </p>
        <p style={{ textAlign: "left" }}>I had to ask myself 2 questions.</p>
        <p style={{ textAlign: "left" }}>
          What’s worse, continuing a job you’re not into because I made this
          huge commitment? Or, admitting you made a mistake and changing
          directions?
        </p>
        <p style={{ textAlign: "left" }}>
          I never want ego to be the reason I make bad decisions because that’s
          self-inflicted. Framing my situation like that made it easy to make a
          decision. So 4 months into the job I finally realized accounting
          wasn’t the right fit and transitioned.
        </p>
        <h2 style={{ color: "white", margin: "auto" }}>Marketing</h2>
        <p style={{ textAlign: "left" }}>
          Transitioning to marketing wasn’t on my mind when I left accounting. I
          didn’t have an immediate plan when I should have.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          During this time, I was working on a project of my own that I started
          in 2018. The basis of the project was to generate passive income
          through affiliate marketing on my website.
        </p>
        <p style={{ textAlign: "left" }}>
          To get people on my website I used content marketing. I was willing to
          do this project just to have some money even if I didn’t like it but
          through the process, I found out marketing is something I enjoy.
        </p>
        <p style={{ textAlign: "left" }}>
          Doing keyword research, researching competitors, and figuring out a
          strategy to get people’s attention was fun. This got me thinking of a
          move into marketing. By this time I had thousands of people coming to
          my website which gave me the confidence to apply.
        </p>
        <p style={{ textAlign: "left" }}>
          Not only was I getting interviews, but I was getting actual experience
          working on my site and helping another local business.
        </p>
        <p style={{ textAlign: "left" }}>
          Doing all this helped me land a job at a startup. I was in a small
          office with 3 other people and the office itself wasn’t big. But
          working at this startup gave me a chance to learn a lot at a fast
          pace. Startups need people to wear multiple hats so I wasn’t just
          doing search engine optimization (SEO). I had a hand in building
          communities, email marketing, influencer outreach, and more.
        </p>
        <p style={{ textAlign: "left" }}>
          My time in 2 weeks at this startup was much more enjoyable than my
          time spent in both accounting roles combined. I was working a job I
          found enjoyable with people I liked. Everything was going good but
          there was always a lingering thought.
        </p>
        <p style={{ textAlign: "left" }}>
          Ever since I graduated college I wanted to learn how to program. This
          sounds pretty bad but I was even trying to learn code while studying
          for my CPA which was just dumb. I never went further than learning
          variables for Python though because studying for the CPA is a job in
          itself.
        </p>
        <p style={{ textAlign: "left" }}>
          During my commute to and from my marketing job I was always on
          Twitter. Not memes or sports news though. I was lurking Tech Twitter.
          This community is just what it sounds like. A community filled with
          people either in tech, or interested in breaking into tech.
        </p>
        <p style={{ textAlign: "left" }}>
          It seemed like every week I would run across a thread of someone who
          recently broke into the industry and them explaining how they did it.
          This gave me the encouragement to look into how I could do it. YouTube
          videos telling people how long it took for them to learn code varied
          though.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          The time ranges for learning code went from 3 to 9 months. Hearing
          that made me second guess if I should actually learn code. I figured
          this was something that would take me a while to accomplish but with
          my job and side project, I figured I didn’t have the time.
        </p>
        <p style={{ textAlign: "left" }}>
          Scrolling through articles and watching YouTubers share their journey
          was something I did throughout my whole marketing stint. What pushed
          me from observing to action were a couple factors.
        </p>
        <p style={{ textAlign: "left" }}>
          The first were personal health reasons, and the second was a strong
          thought that I wanted to be a builder of some sorts. Watching others
          accomplish what I wanted gave me the confidence necessary to take this
          leap.
        </p>
        <p style={{ textAlign: "left" }}>
          I knew I wanted to learn code but had no idea where to start. With no
          clear direction on where to go I did what anyone would do, I quit my
          job to pursue something that I didn’t think I was qualified for.
        </p>
        <h2 style={{ color: "white", margin: "auto" }}>Coding</h2>
        <p style={{ textAlign: "left" }}>
          Taking some time off to recover before starting something new was
          important for me. It gave me time to think through what I was going to
          do. The only problem was I didn’t do enough thinking because I tried
          to teach myself SQL first.
        </p>
        <p style={{ textAlign: "left" }}>
          Writing this now I’m trying to remember why I was teaching myself SQL,
          but let’s just say that was a mistake. After doing more research the
          right move was to learn HTML, CSS, and JavaScript as my foundation. In
          the Fall of 2020, I officially began my journey as a self-taught
          developer.
        </p>
        <p style={{ textAlign: "left" }}>
          I started learning the basics of HTML, CSS, and JavaScript through
          Treehouse. It was just enough material to help me get started making
          small projects. With the help of Frontend Mentor, I was able to apply
          my skills to actual projects. What’s cool about Frontend Mentor is
          that they provide solutions so when you’re stuck, you always have
          something to fall back on.
        </p>
        <p style={{ textAlign: "left" }}>
          I was excited to learn all this “new” technology which made it easy to
          progress. But that progression slowed down when I learned JavaScript.
        </p>
        <p style={{ textAlign: "left" }}>
          I would struggle for hours and sometimes make no progress with
          JavaScript. These types of situations were good because I was going
          through the struggle all programmers go through.
        </p>
        <p style={{ textAlign: "left" }}>
          When the calendar hit Spring 2021, I was inconsistent due to
          procrastination and life happening. I would code for a day and stop
          for the next 2-3 days. This didn’t kill my overall progress though. I
          eventually picked up the pace once I got comfortable.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          I didn’t know anything about libraries once I started learning the
          fundamentals. If you look at job postings though you’ll see a lot of
          postings wanting people with React, Vue, or Angular skills. The most
          in-demand out of all 3 was React so I started building projects with
          React.
        </p>
        <p style={{ textAlign: "left" }}>
          React has a learning curve but it wasn’t as steep as JavaScript since
          React is built on JavaScript. During this time, I kept learning and
          building but knew my routine wasn’t enough to land a job.
        </p>
        <p style={{ textAlign: "left" }}>
          The next best step was to do some freelancing. To do this I reached
          out to people I knew and offered to build them sites. The best people
          to target for this type of work are professionals with white-collar
          jobs because there’s a good chance they have a portfolio which they
          can use on their site.
        </p>
        <p style={{ textAlign: "left" }}>
          Freelancing was a great opportunity to actually put myself to the
          test. It was also something I could talk about in interviews. From
          here, this is when I pivoted to reaching out to people.
        </p>
        <p style={{ textAlign: "left" }}>
          While thinking of how to network the answer was in front of my face
          the whole time. Twitter is what jump started my journey and is the
          community to join if you’re trying to break into tech. I’ve been able
          to message high-level executives, recruiters, founders, and more.
        </p>
        <p style={{ textAlign: "left" }}>
          It’s also a great way to find people who are on the same journey as
          you. Everybody who wants to break into tech wants to connect with
          people who are already there. The most underrated and most valuable
          relationships I got from Tech Twitter were from the people who were on
          the same journey as me.
        </p>
        <p style={{ textAlign: "left" }}>
          To this day, I have friends whom I’ve met from Twitter that I still
          keep in touch with. The people who’ve already done what you want to
          get done can help, but the people who are in the same boat can
          empathize with your struggle, and that’s all you need sometimes.
        </p>
        <p style={{ textAlign: "left" }}>
          Building my skills and being active on Twitter gave me all the tools
          to land a developer job. The only problem was I wasn’t applying still.
          There were conditions in place that prevented my family from being
          above a certain income threshold.
        </p>
        <p style={{ textAlign: "left" }}>
          This is another factor that made me procrastinate. Knowing I wouldn’t
          be able to land a full-time job for at least a year plus put me
          through tough times mentally. Imagine explaining to employers why you
          switched careers multiple times and having huge gaps in your resume
          while switching careers multiple times.
        </p>
        <p style={{ textAlign: "left" }}>
          Not only did I have an unfavorable resume, but there were times where
          I didn’t know for certain I was learning the right technology. Tech
          moves so fast nowadays and you hear about developers using this tech
          or that tech it’s easy to get lost.
        </p>
        <p style={{ textAlign: "left" }}>
          My biggest mistake was not applying to jobs sooner. All the reasons I
          said above made me not want to apply. I thought, "what is the point if
          I can’t even accept an offer?"
        </p>
        <p style={{ textAlign: "left" }}>
          It’s easy to tell yourself you need to do more before doing something
          else, but that’s another form of procrastination. Thankfully, one of
          my best friends told me I should apply anyway for practice.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          f anyone is reading this, the single biggest thing you can do to
          improve your chances of getting in the industry is applying. It’s so
          obvious but it holds a lot of people back. Even if you don’t get a job
          right away, you’ll be gaining valuable practice interviewing.
        </p>
        <p style={{ textAlign: "left" }}>
          At this point I’m networking/applying to jobs in the morning and
          building the rest of the day. To give you an idea of the timeframe,
          it’s the Fall of 2021 where this was my daily schedule. I even kept a
          spreadsheet to keep track of all the applications I sent.
        </p>
        <p style={{ textAlign: "left" }}>
          One problem that kept happening was not being able to land one single
          interview for months. When you go this long without an interview it’s
          time to look at your resume and change some things. I had people who I
          met on Twitter take a look at my resume and they recommended some
          tweaks.
        </p>
        <p style={{ textAlign: "left" }}>
          Making those changes helped me land interviews. The next step was to
          get interviews consistently. Doing a video chat with one Twitter
          friend helped me achieve this. She told me to start “building in
          public”. I always saw this concept on Twitter and it made sense, but I
          only thought of posting videos when my projects were done.
        </p>
        <p style={{ textAlign: "left" }}>
          This is where my marketing brain kicked in. The target audience for me
          was recruiters and I wanted them to keep me top of mind when thinking
          of software engineers. To do that, I have to be active, and a great
          way to stay active is to show my projects via video.
        </p>
        <p style={{ textAlign: "left" }}>
          Posting videos got me more interviews. I also signed up for LinkedIn
          Premium to see if what I was doing was working and once I started
          posting more my profile was getting more attention. Creating content
          and getting my engagement up made me realize my marketing stint wasn’t
          a waste of time. It actually proved valuable in this case.
        </p>
        <p style={{ textAlign: "left" }}>
          I have to admit though, I felt cringey posting videos, but sometimes
          you can’t care what people think. The sole purpose of “building in
          public” is to show people your skills and receive feedback.
        </p>
        <p style={{ textAlign: "left" }}>
          To add more fuel to the fire, I messaged recruiters via LinkedIn and
          connected with more developers. It was 50% marketing and 50% building
          during this timeframe.
        </p>
        <p style={{ textAlign: "left" }}>
          My money was getting low at this time too so I had to get a part-time
          job around February where I worked a couple times a week. My sleep
          schedule would be wrecked but funny enough, that’s a great time to
          focus because no one is awake. I used this time to create more videos
          and post them on LinkedIn.
        </p>
        <p style={{ textAlign: "left" }}>
          I remember looking at my spreadsheet of jobs and the total amount of
          jobs I applied to was 500+. I was able to get interviews but not one
          offer came from that. It hurt looking at that spreadsheet. Another
          thing was seeing your friends who you started the journey with get
          jobs.
        </p>
        <p style={{ textAlign: "left" }}>
          I wasn’t jealous, but it made me think “what was wrong with me?” I was
          literally doing everything possible. But as my friend told me “It can
          be your turn, but not your time or it can be your time, but not your
          turn, it has to be both!”
        </p>
        <p style={{ textAlign: "left" }}>
          During this time, my income threshold situation didn’t have a clear
          end in sight so this made me feel like I was wasting time again. This
          feeling of hopelessness would come and go but never overwhelmed me.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          Fast forward to May 2022 and this is where my personal life combined
          with the job hunt made me want to take a break. It was nearing 2 years
          of learning code and still no job. That thought gave me deep anxiety,
          but it pushed me.
        </p>
        <p style={{ textAlign: "left" }}>
          I didn’t want to take a break but decided a change of scenery was
          necessary. So in May I took a short trip to Las Vegas to visit family.
        </p>
        <p style={{ textAlign: "left" }}>
          By the third day I was there I scheduled a phone call with a
          recruiter. He didn’t dive too deep into my background, all he wanted
          to know was what technology I knew. I told him what I knew and next
          thing I knew I had a technical interview the next day.
        </p>
        <p style={{ textAlign: "left" }}>
          Now I’m wondering what’s going on. I wanted this interview, but I was
          nervous to accept it. I asked friends if I should even go to it. All
          of them said yes emphatically. So knowing I only had one day to
          prepare I just looked at the job posting and only saw 2 technologies I
          knew. There were 2 other paragraphs worth of technologies and thought
          this interview was over before it started.
        </p>
        <p style={{ textAlign: "left" }}>
          Long story short, I did my interview and it went surprisingly well.
          The interview lasted less than an hour and it wasn’t as technical as I
          thought it was.
        </p>
        <p style={{ textAlign: "left" }}>
          After the interview, I treat myself to a nice breakfast which lasts
          about 30 minutes and right as I walk up the stairs up to my room I get
          a call. I answer it and am confused as to who it is.
        </p>
        <p style={{ textAlign: "left" }}>
          The person on the other side was telling me how they wanted to hire
          me, but I couldn’t remember any other companies that I was waiting for
          a call on. It turns out, it was the company I literally just
          interviewed with!
        </p>
        <p style={{ textAlign: "left" }}>
          I was so giddy I told all the people close to me. I literally got out
          of the house just to aimlessly drive around Vegas shouting in
          excitement. Another thought I had was how much of a mistake it would
          be if I didn’t take the interview just because I didn’t think I would
          do well.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          Reflecting back on it there were a couple things I did well in the
          interview. The first was when I admitted I didn’t know something.
          Whenever he asked a technical question I just said “I don’t know.”
          Talking about something you don’t know only makes you look worse.
        </p>
        <p style={{ textAlign: "left" }}>
          The second was I proved to him I could code by showing him the current
          project I was working on at the time. What was important was not only
          showing him my project but taking the initiative to show him.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          If I didn’t do that the interview would just be him asking me
          technical questions. The best way to show someone you can code is to
          take them through your code.
        </p>
        <p style={{ textAlign: "left" }}>
          There’s a part of me that feels like I got lucky, but I know I put in
          a lot of work to get myself in that position. I hope this post gives
          other people wanting to break into the industry some hope and tips
          they can use.
        </p>
      </StyledDiv>
      <StyledDiv></StyledDiv>
    </div>
  );
};

export default SwitchingCareers;
