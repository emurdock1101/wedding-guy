import { Ocean } from "./schema";
const content: any = {
  resultsAccordion: [
    {
      category: Ocean.Extraversion,
      part1:
        "Extraversion is the dimension of personality that reflects individual differences and sensitivities to positive emotion, such as joy and enthusiasm, sociability, motivation to engage with others, eagerness of approach for rewarding situations, and lastly assertiveness around social motivations and relationship goals.",
      part2:
        "Extraverted people are quite enthusiastic, talkative, assertive in social situations, and outgoing. They are energized by social situations and will plan parties, tell jokes, make people laugh and participate in community activities. Their outlook on life will be more positive and optimistic, and they will have higher levels of self-esteem (particularly if they are low in neuroticism). Note: Self-esteem can be viewed as a person’s Extraversion Score minus Neuroticism Score.",
      part3:
        "Example descriptors of extraversion: energetic, fun-seeking, impulsive, dominate, spontaneous, sociable, friendly, reward focused, is a leader, talkative. Note: the more extraverted you are the more value you place on the present over the future, which may mean that impulse control may be more difficult. In other words, extraverts seek out more risky behavior, having a proclivity to do activities labeled as dangerous, reckless, or manic.",
      part4:
        "Example descriptors of introversion: cautious, protective, lethargic, inhibited, reflective, and quiet. Note: the less extraverted you are the more value you place on the future over the present, which may mean you are less motivated by choices that impact the “now”. For example, couples choosing restaurants, disciplining kids, being excited about activities.",
      part5: "Women are slightly more extraverted than men.",
      part6: "Extraversion has 2 aspects: assertiveness and enthusiasm.",
      color: "#ED5362",
    },
    {
      category: Ocean.Neuroticism,
      part1:
        "Neuroticism is the dimension of personality that reflects individual differences and sensitivity toward negative emotion such as pain, sadness, irritable or defensive anger, fear and anxiety and an individual’s responses to threat, frustration, stress, or loss.",
      part2:
        "Neuroticism can impact how an individual engages with problems in the present, past, or future. For example, the higher the levels of neuroticism, the more likely a person is to think that things are going wrong past, present, and future, and will become very unhappy, anxious, and irritable if they think about a problem. Note: The higher the neuroticism and the lower the extraversion, the lower the self-esteem. Neuroticism is a risk factor for anxiety disorders and depression.",
      part3:
        "The lower the levels of neuroticism the better the endurance, coping, and recovery an individual will have when stressed, going through a problem, or dealing with frustration. Note: they can still be unhappy, anxious, and irritable, but it won’t be as an intense or felt as long.",
      part4:
        "Neuroticisms has 2 aspects: withdraw and volatility. It is also linked to the two specific nervous system operations:",
      part5:
        "1) Behavioral inhibition system, which tries to measure any conflict that may interrupt goals and will trigger vigilance, rumination, and passive avoidance. This component encompasses anxiety, depression, and self-consciousness.",
      part6:
        "2) Fight-Flight-Freeze system, which tries to measure the need to avoid imminent or future punishment and will trigger panic, flight, anger, or reactive aggression (fighting). The component encompasses irritability, anger, and the likelihood to get upset or panicky.",
      color: "#9A338E",
    },
    {
      category: Ocean.Agreeableness,
      part1:
        "Agreeableness is the dimension of personality that reflects individual differences and sensitivities toward interpersonal interaction or the tendency to help and cooperate with others. It can be viewed as the trait that helps balance individual interest against the interest of other people.",
      part2:
        "Agreeable people desire connection and want to be liked by others, and they will be more likely to inhibit hostile or aggressive impulses. Women on average are higher in agreeableness than men.",
      part3:
        "Example descriptors of agreeableness: considerate, selfless, generous, compliant, gentle, kind, trusting, and protective of others. Note: The higher the agreeableness, the more likely conflict will be avoided; specifically agreeable people will not express what they are feeling or thinking for the benefit of the other person’s feelings.",
      part4:
        "Example descriptors for disagreeableness: critical, blunt, cynical, stubborn, aggressive, rude, push limits, or competitive or even manipulative. Note: The lower the agreeableness, the more likely conflict will be initiated; specifically disagreeable people will express what they are feeling or thinking for their own benefit.",
      part5:
        "Professionally, agreeable people are more likely to enter helping careers (doctors, nurse, teacher, etc.), while disagreeable people are more interested in objects with a focus on technology, engineering, or trade careers.",
      part6:
        "Agreeableness has 2 aspects: compassion (focus on the needs and problems of others) and politeness (respect for authority and social norms).",
      color: "#3A81CD",
    },
    {
      category: Ocean.Conscientiousness,
      part1:
        "Conscientiousness is the dimension of personality that reflects individual differences and sensitivities to organizing (neat, rule abiding, routine, order) and working hard (responsibility, work ethic, persistence). This can be linked to goal orientation, focus, inhibiting distractions creating order, and controlling impulses.",
      part2:
        "Example descriptors of conscientiousness: neat, clean, traditionalist, makes and adheres to plans or lists, has high aspirations, is hardworking, and disciplined. Note: the higher the levels of conscientiousness, the higher the levels of shame and guilt may be felt, as well as, being controlling or overbearing. The higher the conscientiousness, the higher chances of having success in life.",
      part3:
        "Example descriptors of unconscientiousness: relaxed, self-focused or indulgent, distractable, procrastinator (especially if high in neuroticism), does not like challenges, apply themselves sparingly, nonconforming, or unconventional, and guilt-free. Note: the lower the levels of conscientiousness, the easier it is to relax, deal with failure, or judgement; however, it may appear as laziness or a lack of motivation by people who are higher in conscientiousness or lower in agreeableness.",
      part4:
        "Professionally, those whose conscientiousness is the strongest trait will do well as managers, implementors, and administrators, while those low in consciousness may be more motived by other personality traits that are higher: safety and security if neurotic, social success and fun if extraverted, relationships if agreeable, or creativity or complexity if open. Note: for this reason, it is possible for two people to score the same on conscientiousness but manifest it in different ways depending other areas of their personality.",
      part5: "Women are slightly more conscientious than men.",
      part6:
        "Conscientiousness has 2 aspects industriousness (proclivity to work hard or be goal oriented) and orderliness (the desire to establish & maintain boundaries)",
      color: "#00C9B7",
    },
    {
      category: Ocean.Openness,
      part1:
        "Openness is the dimension of personality that reflect individual differences and sensitivity in creativity, artistic and aesthetic interest, cognitive flexibility, and preference for novelty.",
      part2:
        "Openness reflects how an individual’s engagement or preference for things that are known or unknown. Open people are viewed as smart, creative, exploratory, intelligent, and visionary because they are constantly drawn to learning and acquiring new abilities and skills. In other words, they are very curious and exploratory and for this reason will seek out cultural events such as movies, concerts, plays, poetry readings, gallery, and art shows.",
      part3:
        "They are also driven to produce, create, rearrange, build, and perform. They also engage, share, and explore complex problems, abstract ideas, and creative solutions.",
      part4:
        "This contrasts with people low in openness, who tend to be more conventional and conservative. They are less known for their curiosity or interest in novelty or change. They tend to be comparatively disinterested in learning, particularly for its own sake, and tend to stick with what they know.",
      part5:
        "Trait openness to experience is made up of the aspects: interest in ideas and aesthetic openness.",
      part6: "",
      color: "#344B47",
    },
  ],
  faqs: [
    {
      title: "How was this test created?",
      part1:
        "This test was formatted by using the work of Dr. Colling DeYoung and Dr. Jordan B Peterson (see DeYoung, C.G., Quilty, L.C. & Peterson, J.B. Between facets and domains: 10 aspects of the Big Five. Journal of Personality and Social Psychology, 93, 880-896.).",
      part2:
        "The goal of Personality+ is to offer a more streamlined personality test with results that can be clearly understood and implemented. The interpretations of the test have come from diligent research, study, and clinical practice. If you are curious about conducting your own research, we would point you the Oxford Handbook of the Five Factor Model, Dr. C.G. DeYoung and Dr. J.B. Peterson's published research, or a trusted mental health therapist/researcher.",
    },
    {
      title: "Aren't their other free personality tests?",
      part1:
        "The Big Five Aspect Scale in its original paper/pencil format is in the public domain, and there are other free versions with reports available elsewhere. However, this test was created so that the results and reports generate after the test could be cost effective, clearer, more precise, more user friendly, and most importantly, useable. By useable, we mean providing the results in a way that can help you implement practical changes in your life, allow for self-reflections, or better connect with a mental health therapist.",
      part2:
        "Our research team has created reports that lay out both individual strengths and weaknesses succinctly and practically. Our team has worked hard to compile the results from some of the world's best personality psychologist to help you discover a new you and chance to undertake a new adventure.",
    },
    {
      title: "Why can I only take the test a single time?",
      part1:
        "An accurate personality test must be taken and scored in a standardized manner for accurate results. Furthermore, if you take the test, and then look at your results, and then re-take it, your second results could introduce biases by your now-expanded knowledge of your personality. That means you could alter your responses (consciously or unconsciously), which would change your results.",
      part2: "",
    },
    {
      title: "What can I do to improve my personality?",
      part1:
        "Personality+ is unique in that it offers multiple options to improve your personality. You can schedule a one time review of the test results or schedule weekly or monthly sessions with someone from Personality+.",
      part2: "",
    },
    {
      title: "What if I want to see if my personality has changed?",
      part1:
        "Personality is quite stable. If you have done a lot of work to change a trait or an aspect, there is, however, the possibility of change and improvement. However, this is a process that will occur over months or years, not days or weeks. Thus, it is best not to take the test again soon. Do what you need or want to do to change your personality, and then try the test again in six months or a year.",
      part2: "Reach out to us if you have taken the test over six months ago and would like to try again.",
    },
    {
      title:
        "What if I disagree with the results, or feel that they do not accurately represent my personality?",
      part1:
        "First, remember that this is a self-report test, scored comparatively, using statistical processes. The manner in which you describe yourself has been compared to the manner in which many other people described themselves. If you received results that you do not regard as accurate (and this is more likely to be the case when the report describes more negative personality attributes) it is possible that you were too hard on yourself when you answered the questions. This is more probable if you are higher, rather than lower, in trait neuroticism (as people higher in neuroticism are more self-critical), or if you were in a bad mood when you took the test, or if you are depressed, or hungry or ill.",
      part2:
        "Second, remember that the traits and aspects have to be considered in combination, rather than singly. So, for example, you might be very or extremely high in Agreeableness. You therefore received feedback on the report stating that you have a hard time standing up for yourself, and are generally more concerned with the feelings and desires of other people. However, if you are also high in assertiveness (an aspect of Extraversion) and/or low in Neuroticism then you are more likely to say what you want and put your needs forward than an agreeable person low in the former and high in the latter. If you are low in Conscientiousness, you are less likely to be successful in school and in managerial and administrative jobs—but if you have a high IQ and low Neuroticism then your chances of success rise substantially. Furthermore, you could be low in Conscientiousness but high in Openness to Experience and be successful as a creative person or entrepreneur.",
      part3:
        "Remember, your personality is part of your story and adventure. Learn who you are and discover the strenghts that lie within!",
    },
  ],
  about: {
    elliot: {
      part1:
        "Elliot Murdock is a software engineer with a B.A. in Computer Science from the University of Virginia. He creates websites for small businesses. In his free time, Elliot enjoys climbing, snowboarding, and traveling.",
      part2:
        "Elliot specializes in React, Java, Typescript, and AWS infrastructure-as-code development. He has experience with front-end, back-end, automated testing, and DevOps. Feel free to check out more of his work in the links above.",
    },
    patrick: {
      part1:
        "Patrick Knicely has a B.A from Roaonke College and a M.S. from Radford University. He is a clinical mental health threapist and clinical consultant for inpatient and ambulatory healthcare settings.",
      part2:
        "Patrick helps clients discover who they are by showing them their unique personality and how that personality affects their emotions, behavior, cognition, and motivations. This allows individuals to discover their natural strengths as well as areas of growth. By understanding a client’s personality, Patrick helps clients organize their past, present, and future with self-authoring, behavioral learning, and goal setting to help mitigate depression, anxiety, and trauma.",
    },
  },
  aboutTheTest: {
    results:
      "You will receive information about your unique personality as it relates to the dimensions of the Big Five: Extraversion (positive emotion), Neurotocism (negative emotion), Agreeableness (care for others), Conscientiousness (order and responsibility) and Openness (interest in ideas and aesthetics). You will also receive a percentage and detailed paragraphs about how that might affect your emotions, behavior, thinking, and desires.",
    background:
      "These questions are based on open-sourced research. This includes such notable personality researchers as Dr. Collin DeYoung, Dr. Paul Costa, Jr., Dr. Jordan Peterson, Dr. Joshua Wilt, and Dr. Joshua Revelle.",
  },
};

export default content;
