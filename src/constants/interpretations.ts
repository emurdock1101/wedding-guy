import {Aspect, Ocean} from './schema';
const interpretations: any = [
  {
    category: {
      categoryName: Ocean.Openness,
      veryLow: {
        part1:
          'You are very low in openness, which means you are not interested in novelty, art, literature, abstract thinking, philosophy, and aesthetics.',
        part2:
          'Those very low in openness dislike or are averse to complexity, intellectual problems, or challenges. They are extremely routine and usually have singular likes, which means they are not interested in exploring different cultural events or types of movies, concerts, plays, or art shows. They tend to stay with what they know or were brought up in and find satisfaction in doing things the traditional way.',
        part3:
          'People very low in openness tend dislike having to write or read; however, they tend to stay to “mainstream material” if they do. They have a very narrower range of interests, and a more conventional vocabulary. They dislike having to think abstractly or learn because it will exhaust them. They also may have difficulty getting their thoughts across to others (especially if low in extraversion).',
        part4:
          'People very low in openness thrive in situations or occupations that are more routine and predictable. They are better suited for entry-level, repetitive, rote positions because they don’t need to generate new ways of doing things. They are less inclined to want to try new things or shake things up. This also means they are less entrepreneurial and more appreciative of conventional employment (particularly if average or above in conscientiousness).',
        part5:
          'Note: the lower the openness, the narrower and more focused a person’s interests. This means they can settle on a single path in life, specialize in a skill, and create a singular identity. Because of this they less frequently undermine their own convictions or beliefs by excessive questioning. In contrast, they may appear stuck in the past to those that are higher in openness.',
      },
      low: {
        part1:
          'You are low in openness, which means you are not interested in novelty, art, literature, abstract thinking, philosophy, and aesthetics.',
        part2:
          'Those low in openness dislike or are averse to complexity, intellectual problems, or challenges. They are extremely routine and usually have singular likes, which means they are not interested in exploring different cultural events or types of movies, concerts, plays, or art shows. They will always prefer to stay with what they know or were brought up in, finding satisfaction in doing things the traditional way.',
        part3:
          'People low in openness tend to dislike having to write or read; however, if they do they stick with “mainstream material”. They have a very narrower range of interests, and a more conventional vocabulary. They dislike having to think abstractly and learn because it will exhaust them. They also may have difficulty getting their thoughts across to others (especially if low in extraversion).',
        part4:
          'People low in openness thrive in situations or occupations that are more routine and predictable. They are better suited for entry-level, repetitive, rote positions because they won’t need to generate new ways of doing things. They are less inclined to want to try new things or shake things up. This also means they are less entrepreneurial and more appreciative of conventional employment (particularly if average or above in conscientiousness).',
        part5:
          'Note: the lower the openness, the narrower and more focused a person’s interests. This means they can settle on a single path in life, specialize in a skill, and create a singular identity. Because of this they less frequently undermine their own convictions or beliefs by excessive questioning. In contrast, they may appear stuck in the past to those that are higher in openness.',
      },
      modLow: {
        part1:
          'You are moderately low in openness, which means you are less interested in novelty, art, literature, abstract thinking, philosophy, and aesthetics.',
        part2:
          'Those moderately low in openness are not interested in the complexity of intellectual problems or challenges and prefer to stay away complexity. They like routine and usually have singular interests, which means they are not very interested in exploring different cultural events or types of movies, concerts, plays, or art shows, although they may do such things on occasion. They tend to be comfortable with what they know or were brought up in, and find satisfaction in doing things the traditional way.',
        part3:
          'People moderately low in openness tend to read and write less often than average; however, if they do, it is “mainstream material”. They have a narrower range of interests and a more conventional vocabulary. They can think abstractly and learn, when necessary, but may sometimes have difficulty getting their thoughts across to others (particularly if they average or low in extraversion).',
        part4:
          'Individuals moderately low in openness thrive in situations or occupations that are more routine and predictable. They can be better suited for entry-level, repetitive, rote positions because they don’t need to generate new ways of doing things. They are less inclined to want to try new things or shake things up. This also means they are less entrepreneurial and more appreciative of conventional employment (particularly if average or high in conscientiousness).',
        part5:
          'Note: the lower the openness, the narrower and more focused a person’s interests. This means they can settle on a single path in life, specialize in a skill, and create a singular identity. Because of this they, they less frequently undermine their own convictions or beliefs by excessive questioning. In contrast, they may appear stuck in the past to those that are higher in openness.',
      },
      average: {
        part1:
          'You are average in openness and have lower levels of creativity, exploratory interests, or interest in complex or fantastical ideas than those higher in this trait.',
        part2:
          'People average in openness are moderate in their intellect and curiosity.  Depending on the situation or content they may enjoy reading but may not have as large of a vocabulary as someone who is high in the trait. They can think, learn, and generate ideas with average speed.',
        part3:
          'Sometimes they can see old things in novel ways or appreciate them as they are. Occasionally, they will be able to see problems in different ways and may have solution to go with it. They are not compelled to seek change.',
        part4:
          'Those average in openness are better suited for situations or jobs that are routine and predictable. They don’t mind being placed in categories, pecking orders, set structures. For this reason, they do well with entry-level, repetitive, and rote positions compared to those that are higher in openness. They are not known to shake things up or be rebellious unless pushed into that position and for a specific cause.',
        part5:
          'Individuals average in openness are not as entrepreneurial as someone higher in this trait, which means they have a lower interest in new ventures for any reason: profit, curiosity, personal transformation, etc.',
        part6:
          'Note: The higher the openness the greater the interest in things. Because of this, settling or finding a single path in life, specialization, or identity is very difficult. This can clash with their neuroticism and/or conscientiousness. If also high in neuroticism, they will habitually undermine their own convictions and beliefs, feeling more lost and anxious. If they are low in conscientiousness, they will be “under-achievers” because despite the ability to be smart, learn quickly, or be creative, they do not act on their ideas.',
      },
      modHigh: {
        part1:
          'You are moderately high in openness and are likely to be characterized by others as smart, creative, exploratory, intelligent, and visionary.',
        part2:
          'People moderately high in openness are known for their intellect and curiosity.  They enjoy reading about many subjects, which is accompanied by a larger than normal vocabulary. They can think, learn, generate ideas, and speak quickly.  They can see old things in novel ways, which gives them the ability to see problems in different ways as well unthought of solutions.',
        part3:
          'Those moderately high in openness become uneasy in situations or jobs that focus on routine or are predictable. They are uncomfortable when placed in categories, pecking orders, set structures, which means they will struggle more at entry-level, repetitive, rote positions. If they are in such as position, they will attempt to generate new ways to do things, which are usually not welcome at entry level positions or positions that need to be static or routine.  They are known to shake things up (especially if disagreeable and assertive) and be rebellious (particularly if average or below in conscientiousness).',
        part4:
          'Individuals moderately high in openness are drawn by the entrepreneurial spirit, which means have an interest in new ventures for any reason: profit, curiosity, personal transformation, etc.',
        part5:
          'Note: The higher the openness the greater the interest in things. Because of this, settling or finding a single path in life, specialization, or identity is very difficult. This can clash with their neuroticism or conscientiousness. If also high in neuroticism, they will habitually undermine their own convictions and beliefs, feeling more lost and anxious. If they are low in conscientiousness, they will be “under-achievers” because despite the ability to be smart, learn quickly, or be creative, they do not act on their ideas.',
      },
      high: {
        part1:
          'You are high in openness and are likely to be characterized by others as very smart, creative, exploratory, intelligent, and visionary.',
        part2:
          'People very high in openness are known for their intellect and curiosity.  They enjoy reading about many subjects, which is accompanied by large vocabulary. They can think, learn, generate ideas, and speak quickly.  They can see old things in novel ways, which gives them the ability to see problems in new light as well as new solutions to those problems. For this reason, they are compelled to seek change.',
        part3:
          'Those high in openness do not do well in situations or jobs that are routine and predictable. They struggle to be placed in categories, pecking orders, set structures. For this reason, they are ill-suited for entry-level, repetitive, or rote positions. If they are in such a position, they will generate new ways to do things, which are usually not welcome at entry level positions or positions that need to be static or routine.  They are known to shake things up (especially if disagreeable and assertive) and be rebellious (particularly if average or below in conscientiousness).',
        part4:
          'Individuals high in openness are drawn by the entrepreneurial spirit, which means have a high interest in new ventures for any reason: profit, curiosity, personal transformation, etc.',
        part5:
          'Note: The higher the openness the greater the interest in things. Because of this, settling or finding a single path in life, specialization, or identity is very difficult. This can clash with their neuroticism or conscientiousness. If high in neuroticism, they will habitually undermine their own convictions and beliefs, feeling more lost and anxious. If they are low in conscientiousness, they will be “under-achievers” because despite the ability to be smart, learn quickly, or be creative, they do not act on their ideas.',
      },
      veryHigh: {
        part1:
          'You are very high in openness and are likely to be characterized by others as very smart, creative, exploratory, intelligent, and visionary.',
        part2:
          'People very high in openness are known for their intellect and curiosity.  They are prolific readers of any subject, which is accompanied by large vocabulary. They can think, learn, generate ideas, and speak with great speed.  They can see old things in strikingly new ways, which gives them the ability to see problems in different ways as well as creative solutions. There is a desire to constantly seek change.',
        part3:
          'Those high in openness do not do well in situations or jobs that are routine and predictable. They struggle to be placed in categories, pecking orders, or set structures. For this reason, they are ill-suited for entry-level, repetitive, or rote positions. If they are in such a position, they will constantly generate new ways to do things, which are usually not welcome at entry level positions or positions that need to be static or routine.  They love to shake things up (especially if disagreeable and assertive) and be rebellious (particularly if average or below in conscientiousness).',
        part4:
          'Individuals very high in openness are drawn by the entrepreneurial spirit, which means have a high interest in new ventures for any reason: profit, curiosity, personal transformation, etc.',
        part5:
          'Note: The higher the openness the greater the interest in things. Because of this, settling or finding a single path in life, specialization, or identity is very difficult. This can clash with their neuroticism and/or conscientiousness. If high in neuroticism, they will habitually undermine their own convictions and beliefs, feeling more lost and anxious. If they are low in conscientiousness, they will be “under-achievers” because despite the ability to be smart, learn quickly, or be creative, they do not act on their ideas.',
      },
    },
    aspect1: {
      aspectName: Aspect.AestheticOpenness,
      veryLow: {
        part1:
          'You are very low in aesthetic openness, which means you are not particularly drawn to beauty, art, or creative endeavors.',
        part2:
          'Those very low in aesthetic openness are not driven to find a creative ability or express it; they will also not be negatively affected by this.',
        part3:
          'They are less sensitive to the aesthetic power of color and architectural form. They are less imaginative, rarely daydream, and reflect less often than average. If they enjoy music or other art forms, their taste tends toward the conventional and popular. They are less often musical or artistic themselves and do not become immersed in a book, or a movie, or in their own thoughts.',
        part4:
          'People very low in aesthetic openness are more stable and conventional in their life choices, and for this reason will do better at careers that are of singular focus with less complexity.',
        part5:
          'Note: The lower the creativity, the more practical or focused they may be (especially if high in conscientiousness). This means that they will have an easier time finding a career they can stay in and an identity they are comfortable with.',
        part6: 'Women are higher in openness than men.',
      },
      low: {
        part1:
          'You are low in aesthetic openness, which means you are not particularly drawn to beauty, art, or creative endeavors.',
        part2:
          'Those low in aesthetic openness are not driven to find a creative ability or express it; they will also not be negatively affected by this.',
        part3:
          'They are less sensitive to the aesthetic power of color and architectural form. They are less imaginative, rarely daydream, and reflect less often than average. If they enjoy music or other art forms, their taste tends toward the conventional and popular. They are less often musical or artistic themselves and do not become immersed in a book, or a movie, or in their own thoughts.',
        part4:
          'People of low aesthetic openness are more stable and conventional in their life choices, and for this reason will do better at careers that are of singular focus with less complexity.',
        part5:
          'Note: The lower the creativity, the more practical or focused they may be (especially if high in conscientiousness). This means that they will have an easier time finding a career they can stay in and an identity they are comfortable with.',
        part6: 'Women are higher in openness than men.',
      },
      modLow: {
        part1:
          'You are moderately in low aesthetic openness, which means you are not particularly drawn to beauty, art, or creative endeavors.',
        part2:
          'Those moderately low in creativity are not driven to find a creative ability or express it, and they will also not be negatively affected by this.',
        part3:
          'They are less sensitive to the aesthetic power of color and architectural form. They are less imaginative, rarely daydream, and reflect less often than average. If they enjoy music or other art forms, their taste tends toward the conventional and popular. They are less often musical or artistic themselves and do not become immersed in a book, or a movie, or in their own thoughts.',
        part4:
          'People of moderately low aesthetic openness are more stable and conventional in their life choices, and for this reason will do better at careers that are of singular focus with less complexity.',
        part5:
          'Note: The lower the creativity, the more practical or focused they may be (especially if high in conscientiousness). This means that they will have an easier time finding a career they can stay in and an identity they are comfortable with.',
        part6: 'Women are higher in openness than men.',
      },
      average: {
        part1:
          'You are average in aesthetic openness, which means you occasionally enjoy beauty, art, music (etc.) but are not driven by it. ',
        part2:
          'Those average in aesthetic openness do not need a constant outlet for their creative ability, and are more content with keeping interest at a hobby level. They are adaptable to their environments and do not necessary need it to be aesthetic or creative. For example, they are not overly sensitive to color and architectural form. They have a normal imagination and enjoy music, books, movies, and any other form of entertainment but don’t get lost in it. They may respond to beauty, creativity, and art on occasion.',
        part3:
          'Note: The higher the creativity, the more impractical or flighty they may be (especially if low in conscientiousness). This means that they may have a very hard time monetizing their creativity or turning it into a career.',
        part4: 'Women are higher in openness than men.',
      },
      modHigh: {
        part1:
          'You are moderately high in aesthetic openness, which means you love beauty, art, music, etc.',
        part2:
          'Those moderately high in aesthetic openness need an outlet for their creative ability, or they will wither. They also need an environment to match their creative personality because they tend to be more sensitive to color and architectural form.',
        part3:
          'They have a powerful imagination, which means they can get lost reflecting on things. They are moved by music, books, movies, and any other form of stories to the point that they may be oblivious to the outside world. They respond very strongly to beauty, creativity and art and may be creative themselves in those areas, collecting or creating artistic reminders of creativity.',
        part4:
          'Note: The higher the aesthetic openness, the more impractical or flighty they may be (especially if low in conscientiousness). This means they may have a very hard time monetizing their creativity or turning it into a career.',
        part5: 'Women are higher in openness than men.',
      },
      high: {
        part1: 'You are high in aesthetic openness, which means you love beauty, art, music, etc.',
        part2:
          'Those high in aesthetic openness need an outlet for their creative ability, or they will wither. They also need an environment to match their creative personality because they tend to be more sensitive to color and architectural form.',
        part3:
          'They have a powerful imagination, which means they can get lost reflecting on things. They are moved by music, books, movies, and any other form of stories to the point that they may be oblivious to the outside world. They respond very strongly to beauty, creativity and art and may be creative themselves in those areas, collecting or creating artistic reminders of creativity.',
        part4:
          'Note: The higher the aesthetic openness, the more impractical or flighty they may be (especially if low in conscientiousness). This means they may have a very hard time monetizing their creativity or turning it into a career.',
        part5: 'Women are higher in openness than men.',
      },
      veryHigh: {
        part1:
          'You are very high in aesthetic openness, which means you love beauty, art, music, etc.',
        part2:
          'Those very high in aesthetic openness need an outlet for their creative ability, or they will wither. They also need an environment to match their creative personality because they tend to be more sensitive to color and architectural form.',
        part3:
          'They have a powerful imagination, which means they can get lost reflecting on things. They are moved by music, books, movies, and any other form of stories to the point that they may be oblivious to the outside world. They respond very strongly to beauty, creativity and art and may be creative themselves in those areas, collecting or creating artistic reminders of creativity.',
        part4:
          'Note: The higher the aesthetic openness, the more impractical or flighty they may be (especially if low in conscientiousness). This means they may have a very hard time monetizing their creativity or turning it into a career.',
        part5: 'Women are higher in openness than men.',
      },
    },
    aspect2: {
      aspectName: Aspect.Interest,
      veryLow: {
        part1:
          'You are very low in interest in ideas and dislike being overloaded with complex information.',
        part3:
          'Those individuals very low in this trait are not curious or exploratory and do not like to tackle or solve problems. They are averse to engage or enjoy issue-oriented discussion or readings. They are less articulate and have difficulty in formulating and communicating their ideas (especially if low in extraversion).',
        part4:
          'People very low in interest in ideas do not seek out or develop new or creative ideas, finding it difficult to adapt to new experiences and situations. However, the opposite is true, they are more likely to be incredible proficient and skilled in traditional methods and ideas. People very low in interest in ideas do not like complex occupations and are better suited for straightforward and traditional occupations, where the rules for success are well-defined and tend not to change.',
        part5: 'Women are lower than men in interest in ideas (although not in IQ).',
        part6:
          'Note: Do not confuse the personality aspect with IQ. This aspect measures interest in abstract ideas, while IQ is a measure of processing speed, verbal ability, working memory, and problem-solving capacity, and is better measured with a formal IQ test. It is perfectly possible to have a high IQ and a low score on the personality trait of interest in ideas (or the reverse).',
      },
      low: {
        part1:
          'You are low in interest in ideas and dislike being overloaded with complex information.',
        part2:
          'Those indiviuals low in this trait are not curious or exploratory and do not like to tackle or solve problems. They are averse to engage or enjoy issue-oriented discussion or readings. They are less articulate and have difficulty in formulating and communicating their ideas (especially if low in extraversion).',
        part3:
          'People low in interest in ideas do not seek out or develop new or creative ideas, finding it difficult to adapt to new experiences and situations. However, the opposite is true, they are more likely to be incredible proficient and skilled in traditional methods and ideas. People low in interest in ideas do not like complex occupations and are better suited for stable, straightforward and traditional occupations, where the rules for success are well-defined and tend not to change.',
        part4: 'Women are lower than men in interest in ideas (although not in IQ).',
        part5:
          'Note: Do not confuse the personality aspect with IQ. This aspect measures interest in abstract ideas, while IQ is a measure of processing speed, verbal ability, working memory, and problem-solving capacity, and is better measured with a formal IQ test. It is perfectly possible to have a high IQ and a low score on the personality trait of interest in ideas (or the reverse).',
      },
      modLow: {
        part1:
          'You have moderately low levels of interest in ideas don’t like to be overloaded with complex information. They are less curious and exploratory and do not like to tackle or solve problems. They are less likely to engage or enjoy issue-oriented discussion or readings. They are usually less articulate and have difficulty in formulating and communicating their ideas (especially if low in extraversion).',
        part2:
          'People moderately low in interest in ideas are less likely to seek out or develop new or creative ideas, finding it difficult to adapt to new experiences and situations. However, the opposite is true, they are more likely to be incredible proficient and skilled in traditional methods and ideas.',
        part3:
          'People with moderately low levels of interest do not like complex occupations and are better suited for straightforward and traditional occupations, where the rules for success are well-defined and tend not to change.',
        part4: 'Women are lower than men in interest in ideas (although not in IQ).',
        part5:
          'Note: Do not confuse the personality aspect with IQ. This aspect measures interest in abstract ideas, while IQ is a measure of processing speed, verbal ability, working memory, and problem-solving capacity, and is better measured with a formal IQ test. It is perfectly possible to have a high IQ and a low score on the personality trait of interest in ideas (or the reverse).',
      },
      average: {
        part1:
          'You are average in interest in ideas and may enjoy learning but are not always drawn to engaging in novel situations or information, especially if it is complex.',
        part2:
          'Those average in this trait have normal levels of curious but are not as exploratory, nor do they like to tackle and solve complex problems. On occasion and if it is an interest of their, they will engage, seek, and initiate issue-oriented discussions.',
        part3:
          'They have an average appreciation of reading, writing, and thinking, but they may only do so if there is a need or special occasion or interest.  They may struggle to be articulate and be a bit slower to formulate ideas clearly and quickly compared to those higher in this trait.',
        part4:
          'People average in this trait can develop new and creative concepts but not as fast as those higher in openness. They are also not as compelled to seek out creativity.  They may look for new experiences and situations, if encouraged to do so and if they are slightly higher in extraversion. They are well-suited for straightforward and traditional occupations.',
        part5: 'Women are lower than men in their interest in ideas (although not in IQ).',
        part6:
          'Note: Do not confuse the personality aspect with IQ. This aspect measures interest in abstract ideas, while IQ is a measure of processing speed, verbal ability, working memory, and problem-solving capacity, and is better measured with a formal IQ test. It is perfectly possible to have a high IQ and a low score on the personality trait of interest in ideas (or the reverse).',
      },
      modHigh: {
        part1:
          'You are moderately high in interest in ideas, and you enjoy learning and engaging in novel information, even when it is complex.',
        part2:
          'They read, think, and want to discuss information they consume (most frequently non-fiction), which also makes them articulate and allows them to formulate ideas clearly and quickly (especially if high in extraversion).',
        part3:
          'People moderately high in this trait develop new and creative concepts and search for new experience and situations, which also leads them to find complex occupations. However, they are less suited for straightforward and traditional occupations, where they will experience frequent periods of boredom and frustration in such positions.',
        part4: 'Women are lower than men in their interest in ideas (although not in IQ).',
        part5:
          'Note: Do not confuse the personality aspect with IQ. This aspect measures interest in abstract ideas, while IQ is a measure of processing speed, verbal ability, working memory, and problem-solving capacity, and is better measured with a formal IQ test. It is perfectly possible to have a high IQ and a low score on the personality trait of interest in ideas (or the reverse).',
      },
      high: {
        part1:
          'You are high in interest in ideas, and enjoy learning and engaging in novel information, even when it is complex (which they may prefer).',
        part2:
          'Those moderately high in interest in ideas are curious and exploratory and like to tackle and solve problems. They engage, seek, and initiate issue-oriented discussions. They read, think, and want to discuss information they consume (most frequently non-fiction), which also makes them articulate and allows them to formulate ideas clearly and quickly (especially if high in extraversion).',
        part3:
          'People high in interest of ideas develop new and creative concepts and search for new experience and situations, which also leads them to find complex occupations. However, they are less suited to straightforward and traditional occupations, where they will experience frequent periods of boredom and frustration in such positions.',
        part4: 'Women are lower than men in their interest in ideas (although not in IQ).',
        part5:
          'Note: Do not confuse the personality aspect with IQ. This aspect measures interest in abstract ideas, while IQ is a measure of processing speed, verbal ability, working memory, and problem-solving capacity, and is better measured with a formal IQ test. It is perfectly possible to have a high IQ and a low score on the personality trait of interest in ideas (or the reverse).',
      },
      veryHigh: {
        part1:
          'You are very high in interest in ideas, and enjoy learning and engaging in novel information, even when it is complex (which they might prefer).',
        part2:
          'Those that are very high in this trait are very curious and exploratory, and they like to tackle and solve problems. They engage, seek, and initiate issue-oriented discussions. They read, think, and want to discuss information they consume (most frequently non-fiction), which also makes them articulate and allows them to formulate ideas clearly and quickly (especially if high in extraversion).',
        part3:
          'People very high in interest of ideas develop new and creative concepts and search for new experience and situations, which also leads them to find complex occupations. However, they are less suited for straightforward and traditional occupations, where they will experience frequent periods of boredom and frustration in such positions.',
        part4: 'Women are lower than men in their interest in ideas (although not in IQ).',
        part5:
          'Note: Do not confuse this personality aspect with IQ. This aspect measures interest in abstract ideas, while IQ is a measure of processing speed, verbal ability, working memory, and problem-solving capacity, and is better measured with a formal IQ test. It is perfectly possible to have a high IQ and a low score on the personality trait of interest in ideas (or the reverse).',
      },
    },
  },
  {
    category: {
      categoryName: Ocean.Conscientiousness,
      veryLow: {
        part1:
          'You are very low in conscientiousness and may be described as very relaxed, distractable, present-minded, laid back, undisciplined, and guilt-free. You have strong desire for leisure and are indifferent to making or adhering to plans, finding little need for to-do lists, planners, or even defining days as organized and orderly.',
        part2:
          'Those very low in conscientiousness greatly enjoy inactivity and don’t consider it wasting time. They are very likely to procrastinate (especially, if low in neuroticism), and are more prone to giving excuses. This means that they may need to be pushed or constantly managed to work hard, especially the longer or more complex the task.',
        part3:
          'Very low conscientious people may be late or delayed because they are very easily distracted and place less emphasis on meeting a deadline. This makes them less dependable and less responsible. Because they are not focused on doing things exactly “by the book”, they may be better at solving novel problems (if they can be motivated to solve them), be more flexible if plans suddenly change, or open to “other people’s ideas, opinions, or solutions even if it falls outside the “correct way of doing something”. Family and cultural traditions are less important to them.',
        part4:
          'Academically, they struggle (particularly if they are low in openness) and are not concerned by failing or meeting goals. They do not like to believe that hard work or focus equate to success, preferring to believe that luck is more important.  Because of this they will be less judgmental, less frustrated by failures or mishaps (of others or themselves), and usually do not wrestle with shame or guilt over failure; however, they consider over-workers to be pushovers, teacher’s pets, or brown-nosers.',
        part5:
          'Note: The lower you are in conscientiousness, the easier it will be to relax and live in the moment; however, other people (especially those that are disagreeable and higher in conscientiousness) may react negatively to their tendency to slack off, lack of order or cleanliness, or lack of responsibility.',
        part6:
          'Important: Conscientiousness is the second-best predictor of lifetime success (under general intelligence). It also nested in the other personality traits, and by focusing on micro-plans to help improve your industriousness, orderliness, and proactiveness, you can help mitigate anxiety, depression, and maladaptive strategies.',
      },
      low: {
        part1:
          'You are low in conscientiousness and may be described as very relaxed, distractable, present-minded, laid back, undisciplined, and guilt-free. You have strong desire for leisure and are indifferent to making or adhering to plans, finding little need for to-do lists, planners, or even defining days as organized and orderly.',
        part2:
          'Those low in conscientiousness greatly enjoy inactivity and don’t consider it wasting time. They are very likely to procrastinate (especially, if low in neuroticism), and are more prone to giving excuses. This means that they may need to be pushed or constantly managed to work hard, especially the longer or more complex the task.',
        part3:
          'Low conscientious people may be late or delayed because they are very easily distracted and place less emphasis on meeting a deadline. This will make them less dependable and responsible. Because they are not focused on doing things exactly “by the book”, they may be better at solving novel problems (if they can be motivated to solve them), be more flexible if plans suddenly change, and open to other people’s ideas, opinions, or solutions even if it falls outside the “correct way of doing something”. Family and cultural traditions are less important to them.',
        part4:
          'Academically, they struggle (particularly if they are low in openness) and are not concerned by failing or meeting goals. Also, they do not like to believe that hard work and focus equate to success, preferring to believe luck is more important.  However, because of this they will be less judgmental, less frustrated by failures or mishaps (of others or themselves), and usually do not wrestle with shame or guilt over failure; however, they do consider over-workers to be pushovers, teacher’s pets, or brown-nosers.',
        part5:
          'Note: The lower you are in conscientiousness, the easier it will be to relax and live in the moment; however, other people (especially those that are disagreeable and higher in conscientiousness) may react negatively to their tendency to slack off, lack of order or cleanliness, or lack of responsibility.',
        part6:
          'Important: Conscientiousness is the second-best predictor of lifetime success (under general intelligence). It also nested in the other personality traits, and by focusing on micro-plans to help improve your industriousness, orderliness, and proactiveness, you can help mitigate anxiety, depression, and maladaptive life strategies.',
      },
      modLow: {
        part1:
          'You are moderately low in conscientiousness and may be described as relaxed, distractable, present-minded, laid back, undisciplined, and guilt-free. You have more of a desire for leisure and are not so much concerned with making or adhering to plans, utilizing to-do lists or planners to aide in a more organized and orderly day.',
        part2:
          'Those moderately low in conscientiousness can more easily enjoy inactivity and don’t consider it wasting time. They are more likely to procrastinate (especially, if low in neuroticism), and are more prone to giving excuses. This means that they may need to be pushed or constantly managed to work hard, especially the longer or more complex the task.',
        part3:
          'Moderately low conscientious people may be late or delayed because they are easily distracted, which makes them less dependable and responsible. Because they are not focused on doing things exactly “by the book”, they may be better at solving novel problems, be more flexible if plans suddenly change, and more open to other people’s ideas, opinions, or solutions even if it falls outside the “correct way of doing something”. Family and cultural traditions are less important to them.',
        part4:
          'Academically, they tend to struggle (particularly if they are low in openness) and are less concerned by failing or meeting goals. Also, they will be more inclined to believe that hard work and focus don’t always equate to success, while believing luck is more important.  However, because of this they will be less judgmental, less frustrated by failures or mishaps (of others or themselves), and usually do not wrestle with shame or guilt over failure. They are more tempted to think of over-workers as pushovers, teacher’s pets, or brown-nosers.',
        part5:
          'Note: The lower you are in conscientiousness, the easier it will be to relax and live in the moment; however, other people (especially those that are disagreeable and higher in conscientiousness) may react negatively to their tendency to slack off, lack of order or cleanliness, or lack of responsibility.',
        part6:
          'Important: Conscientiousness is the second-best predictor of lifetime success (under general intelligence). It also nested in the other personality traits, and by focusing on micro-plans to help improve your industriousness, orderliness, and proactiveness, you can help mitigate anxiety, depression, and maladaptive life strategies.',
      },
      average: {
        part1:
          'You are average in conscientiousness, which means you can strike a balance between hardworking and focused on details and relaxation and leisure. You may utilize plans, to-do lists, or planners if you want an organized and orderly day, but you may also have days that are unplanned.',
        part2:
          'Those average in conscientiousness tend to be more active than inactive, being slightly annoyed by wasting time, procrastinating (especially, if low in neuroticism), and excuses. Those average in conscientious usually do what they say but may become distracted. They can face challenges and deal with setbacks appropriately but may choose not to work long hours or even take on extra work if they can complete it another day or feel overworked.   ',
        part3:
          'People average in conscientiousness may be organized, future-oriented, and reliable unless there is a reason specific reason that derails those attempts. They are aware of the importance of doing things “by the book”, but may be flexible if plans, ideas, or work change, and they are more open to other people’s ideas or opinions. They enjoy family and cultural traditions but or not necessarily duty bound by them.',
        part4:
          'Academically, they do well (particularly if they are also intelligent) but may need to be pushed or managed on occasion. They strike a balance in thinking that hard work should be rewarded and sometimes luck is important, too. They can be somewhat judgmental of others and unnerved by their own failures or mishaps depending on the situation.',
        part5:
          'Those average in conscientiousness tend to have normal feelings of guilt and shame around failure, loss of employments, or unfortunate events, even if it is not their fault.',
      },
      modHigh: {
        part1:
          'You are moderately high in conscientiousness, which means you are hardworking, focused on details, clean, and drawn to duty. You usually make and adhere to plans, to-do lists, or planners because you want an organized and orderly day.',
        part2:
          'Those moderately high in conscientiousness do not like inactivity. This includes wasting time, procrastinating (especially, if low in neuroticism), and excuses. Conscientious people are faithful to do what they say. Because they are not easily distracted, even by leisure, they may be viewed as someone who overworks or can’t relax; however, they have a strong ability to persevere in the face of challenges and setback, have a high endurance to work long hours, or even take on extra work.',
        part3:
          'People moderately high in conscientiousness are organized, future-oriented, and reliable. Because of this they are likely to be focused on details and do things exactly “by the book”. Because they do things strictly “by the book”, it may be difficult to solve novel problems, be flexible if plans suddenly change, or open to other people’s ideas or opinions. Family and cultural traditions are important to them.',
        part4:
          'Academically, they do well (particularly if they are also intelligent) and are good at taking responsibility or adhering to duty. They believe (especially if low in agreeableness) that those who work hard should be rewarded, and that those who don’t usually bring it on themselves. They can be somewhat judgmental of others and unnerved by their own failures or mishaps.',
        part5:
          'Those moderately high in conscientiousness tend to feel more guilt and shame. Because of this, they have a strong reaction to failure, loss of employments, or unfortunate events, even if it is not their fault (especially, if higher in neuroticism).',
      },
      high: {
        part1:
          'You are high in conscientiousness and are very hardworking, focused on details, clean, and drawn to duty. You have a strong proclivity to make and adhere to plans, to-do lists, and planners because you desire an organized and orderly day.',
        part2:
          'Those high in conscientiousness are uncomfortable (if not agitated) by inactivity. They do not like wasting time, procrastinating (especially, if low in neuroticism), and excuses. Conscientious people are very faithful to do what they say. Because they are not easily distracted, even by leisure, they may be viewed as someone who overworks or can’t relax; however, they have a strong ability to persevere in the face of challenges and setback, have a high endurance to work long hours, or even take on extra work.',
        part3:
          'People high in conscientiousness are very organized, future-oriented, and reliable. Because of this they are likely to be focused on details and like doing things exactly “by the book”. Because they do things strictly by the book, it may be difficult to solve novel problems, be flexible if plans suddenly change, or open to other people’s ideas or opinions. Family and cultural traditions are very important to them.',
        part4:
          'Academically, they do very well (particularly if they are also intelligent) and are also committed to responsibility or duty. They believe (especially if low in agreeableness) that those who work hard should be rewarded, and that those who don’t usually bring it on themselves. They can be judgmental of others and disgusted by their own failures or mishaps.',
        part5:
          'Those high in conscientiousness are also prone to guilt and shame. Because of this, they react strongly to failure, loss of employments, or unfortunate events, even if it is not their fault (especially, if higher in neuroticism).',
        part6:
          'Note: They can be hyper-concerned with hygiene, moral purity, and achievement. They can be very micro-managing and controlling and in extreme cases lead to obsessive-compulsive tendencies, burn-out, and even anorexia.',
      },
      veryHigh: {
        part1:
          'You are very high in conscientiousness and are extremely hardworking, focused on details, clean, and drawn to duty. You have an incredibly strong proclivity to make and adhere to plans, to-do lists, and planners because you stive for an organized and orderly day.',
        part2:
          'Those very high in conscientiousness are very uncomfortable (if not agitated) by inactivity. They hate wasting time, procrastinating (especially, if low in neuroticism), and excuses. Conscientious people are faithful to do what they say. Because they are not easily distracted, even by leisure, they may be viewed as someone who overworks or can’t relax; however, they have a strong ability to persevere in the face of challenges and setback, have a high endurance to work long hours, or even take on extra work.',
        part3:
          'People very high in conscientiousness are extremely organized, future-oriented, and reliable. Because of this they are likely to be obsessed with details and like to do things exactly “by the book”, which may make it difficult to solve novel problems, be flexible if plans suddenly change, or open to other people’s ideas or opinions. Family and cultural traditions are very important to them.',
        part4:
          'Academically, they do very well (particularly if they are also intelligent) and are also extremely committed to responsibility or duty. They are convinced (especially if low in agreeableness) that those who work hard should and will be rewarded, and that those who don’t work hard deserve their failure. Also, they can come across as judgmental and be easily disgusted even by their own failures or mishaps.',
        part5:
          'Those very high in conscientiousness are also very prone to guilt and shame. Because of this, they react very intensely to failure, loss of employment, or unfortunate events, even if it is not their fault (especially, if higher in neuroticism).',
        part6:
          'Note: They can be hyper-concerned with hygiene, moral purity, and achievement. They can be very micro-managing and controlling, and in extreme cases this can lead to obsessive-compulsive tendencies, burn-out, or struggle with taking time off.',
      },
    },
    aspect1: {
      aspectName: Aspect.Industriousness,
      veryLow: {
        part1:
          'You are very low in industriousness, which means you are rarely driven or excited about work or duty (if not averse to it altogether). If you are high in openness, you are likely to be regarded as an extreme underachiever.',
        part2:
          'Those very low in industriousness find it extremely difficult to focus on work and struggle with procrastinating, missing deadlines, or failing to complete assignments or projects. They easily forget or disregard responsibilities, and aren’t concerned with schedules, timelines, or getting tasks done quickly. They need to be supervised constantly to complete tasks because they lack focus and are easily distracted.',
        part3:
          'People very low in industriousness are nonjudgmental, will easily accept excuses, and give people the benefit of the doubt. They do not like to think that people fail because they don’t apply themselves, believing fate or bad luck is more of a factor. They are not as sensitive to guilt, disgust, or shame, and have a very relaxed attitude toward life or life goals.',
        part4: 'Men are slightly more industrious than women.',
      },
      low: {
        part1:
          'You are low in industriousness, which means you are not driven or excited about work or duty. If you are high in openness, you are likely to be regarded as an underachiever.',
        part2:
          'Those low in industriousness don’t focus on work and struggle with procrastinating, missing deadlines, or failing to complete assignments or projects. They will put off responsibilities, aren’t concerned with schedules, timelines, or getting tasks done quickly. They need to be supervised constantly to complete tasks because they lack focus and are easily distracted.',
        part3:
          'People low in industriousness are nonjudgmental, will easily accept excuses, and give people the benefit of the doubt. They do not like to think that people fail because they don’t apply themselves, believing fate or bad luck is more of a factor. They are not as sensitive to guilt, disgust, or shame, and have a very relaxed attitude toward life or life goals.',
        part4: 'Men are slightly more industrious than women.',
      },
      modLow: {
        part1:
          'You are moderately low in industriousness, which means you are not driven or excited about work or duty. If you are high in openness, you are likely to be regarded as an underachiever.',
        part2:
          'Those moderately low in industriousness don’t focus on work and may struggle with procrastinating, missing deadlines, or failing to complete assignments or projects. They tend to put off responsibilities, aren’t particularly concerned with schedules, timelines, or getting tasks done quickly. They need to be supervised often to complete tasks because they lack focus and are easily distracted.',
        part3:
          'People moderately low in industriousness do not judge themselves or others regarding work and will be more likely to accept excuses and give people the benefit of the doubt. They are averse to think that people fail because they don’t apply themselves, believing fate or bad luck is more of a factor. They are not as sensitive to guilt, disgust, or shame, and have a more relaxed attitude toward life or life goals.',
        part4: 'Men are slightly more industrious than women.',
      },
      average: {
        part1:
          'You are average in industriousness, which means you can balance the drive to get things done with relaxing. You can more easily separate leisure and work.',
        part2:
          'Those with average levels of industriousness understand what they are supposed to do but are not obsessed with it or duty bound by it.  They usually find a balance with completing tasks and making mistakes and may not be as sensitive to failing as those higher in this trait. They find the benefits of a schedule but aren’t compelled to be on one. They can be focused on completing tasks but feel less urgency than those higher in this trait.',
        part3:
          'Those average in industrious will easily be able to see over or under achievers and be slightly annoyed at both. They believe that people fail because they don’t apply themselves or work hard enough, but they aren’t above having sympathy or belief that luck could help. They are less sensitive to feeling guilty if they fail in their schedule, plan, or specific job or duty. In most cases, the know how to enjoy free time.',
        part4: 'Men are slightly more industrious than women.',
      },
      modHigh: {
        part1:
          'You are moderately high in industriousness, which means you are driven to do. You view life and work about the same, and you prefer to be doing something useful over doing nothing.',
        part2:
          'Those moderately high are driven by duty, and they don’t like to put things off, make mistakes, or fail to finish what they start. Because of this, they prefer to be on a schedule. They are focused on accomplishing more in less time regardless of resources and have a strong focus.',
        part3:
          'Those high in industrious tend to judge laziness or people who are incompetent, and they will attempt to remove those people from their work or lives. They believe that people fail because they don’t apply themselves or work hard enough. They can feel guilty if they fail in their schedule, plan, or specific job or duty. In most cases, they must schedule in specific leisure or leisure activities, or they will be very uncomfortable with that free time or experience burnout.',
        part4: 'Men are slightly more industrious than women.',
      },
      high: {
        part1:
          'You are high in industriousness, which means you are very driven to do. You view life and work the same, and you must always be doing something useful.',
        part2:
          'Those high in industriousness will struggle to relax or do nothing. Because they are very much driven by duty, they never put things off, hate making mistakes, finish what they start, and are always on a schedule. They are driven to accomplish more in less time regardless of resources and have exceptional focus.',
        part3:
          'Those high in industriousness are quick to judge laziness or people who are incompetent, and they will attempt to remove those people from their work or lives. There is a strong belief that people fail because they don’t apply themselves or work hard enough. They can feel guilty if they fail in their schedule, plan, or specific job or duty. In most cases, they must be taught how to have leisure, or they will eventually be overcome by burnout.',
        part4: 'Men are slightly more industrious than women.',
      },
      veryHigh: {
        part1:
          'You are very high in industriousness, which means you are extremely driven to do. You view life and work the same, and you must always be doing something useful.',
        part2:
          'Those very high in industriousness will always struggle to relax or do nothing. Because they are very much driven by duty, they never put things off, hate making mistakes, finish what they start, and are always on a schedule. They are obsessed with accomplishing more in less time regardless of resources and have exceptional focus.',
        part3:
          'Those very high in industrious are quick to judge laziness or people who are incompetent, and they will attempt to remove those people from their work or lives. There is a strong belief that people fail because they don’t apply themselves or work hard enough. They can feel extremely guilty if they fail in their schedule, plan, or specific job or duty. They must work hard at learning to have leisure or will eventually be overcome by burnout.',
        part4: 'Men are slightly more industrious than women.',
      },
    },
    aspect2: {
      aspectName: Aspect.Orderliness,
      veryLow: {
        part1:
          'You are very low in orderliness, which means you don’t orient your life in a clean and ordered way. You don’t mind mess and chaos and may sometimes prefer it. This can also impact the way you think, which means you don’t view things as black and white, good and bad, or acceptable and unacceptable because from your viewpoint there are a lot of grey areas in life.',
        part2:
          'Those with very low levels of orderliness don’t like to make or stick to schedules because if feels too rigid, don’t feel the need to have a proper place for everything (including ideas and beliefs), and don’t mind if things become scattered. They don’t like to be focused on details, rules, and morality. For this reason, they lack a judgmental, harsh, and punitive towards attitude toward themselves and others if order is disturbed. They usually become upset if there is too much routine.',
        part3:
          'Being very low in orderliness can mean struggling or extremely disliking complex tasks or careers and tend to be more creative because creativity allows you to explore outside the normal boundaries.',
        part4:
          'NOTE: Women are more orderly than men, which is why there is struggle with housework between women and men. Women will more often be disgusted with household disorder faster than males. Communication over chores that deal with organizing and cleanliness is extremely important if resentment or unfair distribution of chores is to be avoided.',
      },
      low: {
        part1:
          'You are low in orderliness, which means you don’t orient your life in a clean and ordered way. You don’t mind mess and chaos and may sometimes prefer it. This can also impact the way you think, which means things can’t always be divided up into two groups: black and white, good and bad, or acceptable and unacceptable because from your viewpoint there are a lot of grey areas in life.',
        part2:
          'Those that are low in orderliness don’t like to make and stick to schedules because if feels too rigid, don’t feel the need to have a proper place for everything (including ideas and beliefs), and don’t mind if things become scattered. They don’t like to be focused on details, rules, and morality. For this reason, they are less judgmental, harsh, and punitive towards attitude toward themselves and others if order is disturbed. They usually become upset if there is too much routine.',
        part3:
          'Being low in orderliness can mean struggling or extremely disliking complex tasks or careers and tend to be more creative because creativity allows you to explore outside the normal boundaries.',
        part4:
          'NOTE: Women are more orderly than men, which is why there is struggle with housework between women and men. Women will more often be disgusted with household disorder faster than males. Communication over chores that deal with organizing and cleanliness is extremely important if resentment or unfair distribution of chores is to be avoided.',
      },
      modLow: {
        part1:
          'You are moderately low in orderliness, which means you usually don’t orient your life in a clean and ordered way. You usually don’t mind mess and chaos. This can also impact the way you think, which is less black and white. In other words, things don’t always fall into a good or bad and acceptable or unacceptable group because there are more grey areas for you.',
        part2:
          'Those that are moderately low in orderliness usually don’t make and stick to schedules, don’t necessarily have proper place for everything (including ideas and beliefs), and don’t mind if things become scattered. They would prefer to not be focused on details, rules, and morality. For this reason, they are less judgmental, harsh, and punitive towards themselves and others if their order is disturbed. They usually don’t become upset without routine.',
        part3:
          'Being moderately low in orderliness can mean struggling at managing complex tasks but may be more creative because creativity allows you to explore outside the normal boundaries.',
        part4:
          'NOTE: Women are more orderly than men, which is why there is struggle with housework between women and men. Women will more often be disgusted with household disorder faster than males. Communication over chores that deal with organizing and cleanliness is extremely important if resentment or unfair distribution of chores is to be avoided.',
      },
      average: {
        part1:
          'You are average in orderliness, which means you are neither disturbed nor disgusted by mess and chaos compared to those higher in this trait.',
        part2:
          'On average, you are moderately tidy and organized, and aren’t forced to think in terms of simple black and white. You aren’t always reliant on schedules, lists or routines, unless it is needed, and same goes for your focus on detail, rules, or general morality.',
        part3:
          'Most of the time you prefer routine and predictability but don’t become as upset if things are disrupted. For the most part you do well with complexity, but you may have to be reminded to pay proper attention and maintain focus. There is better tolerance for mess, disruption, and chaos, which makes you slightly more creative.',
        part4:
          'NOTE: Women are more orderly than men, which is why there is struggle with housework between women and men. Women will more often be disgusted with household disorder faster than males. Communication over chores that deal with organizing and cleanliness is extremely important if resentment or unfair distribution of chores is to be avoided.',
      },
      modHigh: {
        part1:
          'You are moderately high in orderliness, which means you try to orient your life in a clean and ordered way. You are usually disturbed and disgusted by mess and chaos. This can also impact the way you think, which is black and white. In other words, things are good or bad and acceptable or unacceptable. There very few grey areas.',
        part2:
          'Those moderately high in orderliness prefer to make and stick to schedules, have a proper place for everything (including ideas and beliefs), and most importantly like things to stay where they belong. They focus on details, rules, and morality. For this reason, they can be judgmental, harsh, and punitive towards themselves and others if their order is disturbed. They can become upset without routine.',
        part3:
          'Being moderately high in orderliness can mean being skilled at managing complex tasks, but at the cost of creativity because creativity can be viewed as messy, disruptive, and chaotic.',
        part4:
          'NOTE: Women are more orderly than men, which is why there is struggle with housework between women and men. Women will more often be disgusted with household disorder faster than males. Communication over chores that deal with organizing and cleanliness is extremely important if resentment or unfair distribution of chores is to be avoided.',
      },
      high: {
        part1:
          'You are high in orderliness, which means you try to orient your life in a clean and ordered way. You are disturbed and disgusted by mess and chaos. This can also impact the way you think, which is black and white. In other words, things are good or bad and acceptable or unacceptable. There are no grey areas.',
        part2:
          'Those high in orderliness make and stick to schedules, have a proper place for everything (including ideas and beliefs), and most importantly like things to stay where they belong. They can obsess over details, rules, and morality. For this reason, they can be very judgmental, harsh, and punitive towards themselves and others if their order is disturbed. They are extremely agitated without routine.',
        part3:
          'Being high in orderliness can mean being skilled at managing complex tasks but are less creative because creativity can be viewed as messy, disruptive, and chaotic.',
        part4:
          'NOTE: Women are more orderly than men, which is why there is struggle with housework between women and men. Women will more often be disgusted with household disorder faster than males. Communication over chores that deal with organizing and cleanliness is extremely important if resentment or unfair distribution of chores is to be avoided.',
      },
      veryHigh: {
        part1:
          'You are very high in orderliness, which means you try to orient your life in a clean and ordered way. You are very disturbed and disgusted by mess and chaos. This can also impact the way you think, which is black and white. In other words, things are good or bad and acceptable or unacceptable. There are no grey areas.',
        part2:
          'Those very high in orderliness make and stick to schedules, have a proper place for everything (including ideas and beliefs), and most importantly like things to stay where they belong. They can obsess over details, rules, and morality. For this reason, they can be very judgmental, harsh, and punitive towards themselves and others if their order is disturbed. They are extremely agitated without routine.',
        part3:
          'Being very high in orderliness can mean being skilled at managing complex tasks but are less creative because creativity can be viewed as messy, disruptive, and chaotic.',
        part4:
          'NOTE: Women are more orderly than men, which is why there is struggle with housework between women and men. Women will more often be disgusted with household disorder faster than males. Communication over chores that deal with organizing and cleanliness is extremely important if resentment or unfair distribution of chores is to be avoided.',
      },
    },
  },
  {
    category: {
      categoryName: Ocean.Extraversion,
      veryLow: {
        part1:
          'You are very low in extraversion, and can be described as quiet, keeps to self (if also high in neuroticism), and a loner.',
        part2:
          'People very low in extraversion prefer to watch and listen before speaking, which means they almost never act or speak first in an ambiguous or novel situation. For this reason, they are usually detached, unimpressed, or unenthused. If they do engage, it will need to be about something that they are very interested in, a specific skill they have, or a team sport.',
        part3:
          'Those very low in extraversion are less enthusiastic friends, spouses, and employees. The lower you are in extraversion the better you will be at careers involving isolated types of work or work that doesn’t involve sales, persuasion, groupwork, or public speaking (esp. if they are low in neuroticism). It is very easy for them to be alone (esp. to study and work), and they can be annoyed at distractions that revolve around chatting, joking, and socializing. This is particularly the case if they are also higher in conscientiousness.',
        part4:
          'Being very low in extraversion means being less prone to impulsivity, more so if it is a fun, social situation. If social or group-oriented occasions arrive, you will be more willing to avoid it because they feel exhausting. Those that are introverted fall into the loner side of the social distribution and are not usually positive nor optimistic.',
        part5:
          'People very low in extraversion are almost never dominant in social situations, particularly if they are high in agreeableness. Note: Being high or low in other areas can impact your extraversion: If you are agreeable and unconscientious, you are extremely other-centered. If you are introverted and conscientious, you may be less productive than your extraverted counterparts, or and more productive than those that are extroverted and low in conscientiousness.',
      },
      low: {
        part1:
          'You are low in extraversion, and can be described as quiet, keeps to self (esp. if also high in neuroticism), and a loner.',
        part2:
          'People low in extraversion prefer to watch and listen before speaking, which means they are unlikely to act or speak first in an ambiguous or novel situation. They are usually more detached, unimpressed, or unenthused than extraverts. If they do engage, it will need to be about something that they are very interested in, a specific skill they have, or a team sport.',
        part3:
          'Those low in extraversion are less enthusiastic friends, spouses, and employees. The lower you are in extraversion the better you will be at careers involving isolated types of work or work that doesn’t involve sales, persuasion, groupwork, or public speaking (eps. if they are low in neuroticism). It is very easy for them to be alone (esp. to study and work), and they can be annoyed at distractions that revolve around chatting, joking, and socializing. This is particularly the case if they are also higher in conscientiousness.',
        part4:
          'Being low in extraversion means being less prone to impulsivity, more so if it is a fun, social situation. If social or group-oriented occasions arrive, you will be more willing to avoid it because they feel exhausting. Those that are introverted fall into the loner side of the social distribution and are not usually positive nor optimistic.',
        part5:
          'People low in extraversion are almost never dominant in social situations, particularly if they are high in agreeableness. Note: Being high or low in other areas can impact your extraversion: If you are agreeable and unconscientious, you are extremely other-centered. If you are introverted and conscientious, you may be less productive than your extraverted counterparts, or and more productive than those that are extroverted and low in conscientiousness.',
      },
      modLow: {
        part1:
          'You are moderately low in extraversion, and can be described as quiet, keeps to self (esp. if high in neuroticism), and a loner.',
        part2:
          'People moderately low in extraversion prefer to watch and listen before speaking, which means they are unlikely to act or speak first in an ambiguous or novel situation. They are usually detached, unimpressed, or unenthused. If they do engage, it will need to be about something that they are very interested in, a team sport, a specific skill they have.',
        part3:
          'Those moderately low in extraversion are less enthusiastic friends, spouses, and employees. The lower you are in extraversion the better you will be at careers involving isolated types of work or work that doesn’t involve sales, persuasion, groupwork, or public speaking (esp. if they are low in neuroticism). It is very easy for them to be alone (esp. to study and work), and they can be annoyed at distractions that revolve around chatting, joking, and socializing. This is particularly the case if they are also higher in conscientiousness.',
        part4:
          'Being moderately low in extraversion means being less prone to impulsivity, more so if it is a fun, social situation. If social or group-oriented occasions arrive, you will be more willing to avoid it because they feel exhausting. Those that are introverted fall into the loner side of the social distribution and may not be as positive nor optimistic.',
        part5:
          'People moderately low in extraversion are almost never dominant in social situations, particularly if they are high in agreeableness. Note: Being high or low in other areas can impact your extraversion: If you are agreeable and unconscientious, you are extremely other-centered. If you are introverted and conscientious, you may be less productive than your extraverted counterparts, or and more productive than those that are extroverted and low in conscientiousness.',
      },
      average: {
        part1:
          'You are average in extraversion, which means you are not overly enthusiastic, talkative, assertive, or self-disclosing.',
        part2:
          'People average in extraversion are usually not compelled to act or speak first when groups meet (parties, work meetings, meet-ups), but they will voice their opinion. At times, they can be captivating and convincing, but usually when it matches a specific interest.',
        part3:
          'Those average in extraversion are socially balanced as friends, spouses, and employees, which means they tend to be more adaptative to a higher range of jobs because they can be extraverted enough for careers involving sales, persuasion, groupwork, or public speaking (if they are low in neuroticism) but introverted enough to work independently or away from groups. They have a good endurance for public events and speaking, but it may fatigue them if the event goes on too long, and the same is true of isolated events.',
        part4:
          'Being average in extraversion means being less prone to impulsivity, regardless of the fun or social aspect of the situation. They also have a better understanding of how choices made in the moment can affect the future.',
        part5:
          'People average in extraversion usually are not dominant in social situations unless they are disagreeableness. Note: Being high or low in other areas can impact your extraversion: If you are less agreeable and conscientious, you might be more self-centered. If you are extraverted and conscientious, you are more productive and less productive than if you are extroverted and unconscientious.',
      },
      modHigh: {
        part1:
          'You are moderately high in extraversion, and can be described as talkative, self-disclosing (if also low in neuroticism), and very social.',
        part2:
          'People moderately high in extraversion tend to speak first when groups meet (parties, work meetings, meet-ups), which means they are likely to act first in an ambiguous or novel situation. They are usually captivating and convincing.',
        part3:
          'Those moderately high in extraversion are more enthusiastic friends, spouses, and employees. Extraverts thrive in careers involving sales, persuasion, groupwork, or public speaking (if they are low in neuroticism) and less oriented to jobs that require a lot of isolated work. It can be difficult for them to be alone (especially to study and work), and they can be easily distracted by opportunities to chat, joke, and socialize. This is particularly the case if they are also low in conscientiousness.',
        part4:
          'Being moderately high in extraversion means being more prone to impulsivity, more so if it is a fun, social situation. If social or group-oriented occasions arrive, you will be more willing to act “now” for that occasion rather than worry about future consequences.',
        part5:
          'People moderately high in extraversion are more dominant in social situations, particularly if they are also low in agreeableness. Note: Being high or low in other areas can impact your extraversion: If you are less agreeable and conscientious, you might be more self-centered. If you are extraverted and conscientious, you are more productive and less productive than if you are extroverted and unconscientious.',
      },
      high: {
        part1:
          'You are high in extraversion, and can be described as talkative, self-disclosing (if also low in neuroticism), and very social.',
        part2:
          'People high in extraversion tend to speak first when groups meet (parties, work meetings, meet-ups), which means they are likely to act first in an ambiguous or novel situation. They are usually captivating and convincing.',
        part3:
          'Those high in extraversion are more enthusiastic friends, spouses, and employees. Extraverts thrive in careers involving sales, persuasion, groupwork, or public speaking (esp. if they are low in neuroticism) and less oriented to jobs that require a lot of isolated work. It can be difficult for them to be alone (especially to study and work), and they can be easily distracted by opportunities to chat, joke, and socialize. This is particularly the case if they are also low in conscientiousness.',
        part4:
          'Being high in extraversion means being more prone to impulsivity, more so if it is a fun, social situation. If social or group-oriented occasions arrive, you will be more willing to act “now” than worry about future consequences.',
        part5:
          'People high in extraversion are more dominant in social situations, particularly if they are also low in agreeableness. Note: Being high or low in other areas can impact your extraversion: If you are less agreeable and conscientious, you might be more self-centered. If you are extraverted and conscientious, you are more productive and less productive than if you are extroverted and unconscientious.',
      },
      veryHigh: {
        part1:
          'You are very high in extraversion, and can be described as talkative, self-disclosing (if also low in neuroticism), and very social.',
        part2:
          'People very high in extraversion tend to speak first in groups (parties, work meetings, meet-ups), which means they are likely to act first in an ambiguous or novel situation. They are usually captivating and convincing.',
        part3:
          'Those very high in extraversion are more enthusiastic friends, spouses, and employees. Extraverts thrive in careers involving sales, persuasion, groupwork, or public speaking (esp. if they are low in neuroticism) and less oriented to jobs that require a lot of isolated work. It can be difficult for them to be alone (especially to study and work), and they can be easily distracted by opportunities to chat, joke, and socialize. This is particularly the case if they are also low in conscientiousness.',
        part4:
          'Being very high in extraversion means being more prone to impulsivity, more so if it is a fun, social situation. If social or group-oriented occasions arrive, you will be more willing to act “now” than worry about future consequences.',
        part5:
          'People very high in extraversion are more dominant in social situations, particularly if they are also low in agreeableness. Note: Being high or low in other areas can impact your extraversion: If you are less agreeable and conscientious, you might be more self-centered. If you are extraverted and conscientious, you are more productive and less productive than if you are extroverted and unconscientious.',
      },
    },
    aspect1: {
      aspectName: Aspect.Enthusiasm,
      veryLow: {
        part1:
          'You are very low in enthusiasm and are not sociable, excitable, happy, or easy to get to know.',
        part2:
          'Those very low in enthusiasm talk less and may talk slower, more so if there are other people engaged. They are also less animated in their speech, including laughing or giggling less. There is a strong desire to be alone and avoid crowd (parties, concerts, bars, etc). If placed in crowds for too long, very low enthusiastic people will become drained or irritated and usually will need to recover with bouts of solitude.',
        part3:
          'People very low in enthusiasm keep people further away and more concerned with keeping things private. They will view life (past, present, and future) with less positivity and optimism. If high in openness, it may be difficult to showcase your work or perform your work for groups.',
        part4:
          'Note: The very lower the enthusiasm the less stimulation, excitement, activity, and fun are desired.  In relationships, you may come across as uninterested, lacking an opinion, or have a level of disinterestedness that may make people think you are interested in them. Maladaptive levels of enthusiasm can come across as mania. Being lower in the enthusiasm doesn’t mean that you are sad. It means that the way you express positive emotions may be muted compared to those that are high in enthusiasm.',
        part5: 'Women are higher in enthusiasm than men.',
      },
      low: {
        part1:
          'You are low in enthusiasm and are not sociable, excitable, happy, or easy to get to know.',
        part2:
          'Those low in enthusiasm talk less and may talk slower, more so if there are other people around. They are also less animated in their speech, including laughing or giggling. There is a strong desire to be alone and avoid crowds (parties, concerts, bars, etc.). If placed in crowds for too long, low enthusiastic people will become drained or irritated and usually will need to recover with bouts of solitude.',
        part3:
          'People low in enthusiasm keep people further away and are more concerned with keeping things private. They will view life (past, present, and future) with less positivity and optimism. If high in openness, it may be difficult to showcase your work or perform your work for groups.',
        part4:
          'Note: The lower the enthusiasm the less stimulation, excitement, activity, and fun are desired.  In relationships, you may come across as uninterested, lacking an opinion, or have a level of disinterestedness that may make people think you are not interested in them. Maladaptive levels of enthusiasm can come across as mania. Being lower in the enthusiasm doesn’t mean that you are sad. It means that the way you express positive emotions may be muted compared to those that are high in enthusiasm.',
        part5: 'Women are higher in enthusiasm than men.',
      },
      modLow: {
        part1:
          'You are moderately low in enthusiasm and are not as sociable, excitable, happy, or easy to get to know.',
        part2:
          'Those moderately low in enthusiasm talk less and may talk slower, more so if there are other people around. They are also less animated in their speech, including laughing or giggling. There is a desire to be alone and avoid crowd (parties, concerts, bars, etc.). If placed in crowds for too long, moderately low enthusiastic people will become drained or irritated and usually will need to recover with bouts of solitude.',
        part3:
          'People moderately low in enthusiasm keep people further away and are more concerned with keeping things private. They will view life (past, present, and future) with less positivity and optimism. If high in openness, it may be difficult to showcase your work or perform your work for groups.',
        part4:
          'Note: The lower the enthusiasm the less stimulation, excitement, activity, and fun are desired.  In relationships, you may come across as uninterested, lacking an opinion, or have a level of disinterestedness that may make people think you are not interested in them. Maladaptive levels of enthusiasm can come across as mania. Being lower in the enthusiasm doesn’t mean that you are sad. It means that the way you express positive emotions may be muted compared to those that are high in enthusiasm.',
        part5: 'Women are higher in enthusiasm than men.',
      },
      average: {
        part1:
          'You are average in enthusiasm, which means you strike a good balance of being sociable, excitable, happy, and easy to get to know as well as being able to enjoy solitude.',
        part2:
          'Those average in enthusiasm tend to be less excitable in their speech, regardless of the amount of people around. Their speech is less animated, including laughing or giggling. You enjoy people and social events (parties, concerts, bars, etc.), but not to extreme level and far less often than those that are higher in this trait; however, you can also enjoy times of solitude.',
        part3:
          'People average in enthusiasm know how to keep a friend group compared to thinking that everyone is a friend and know when to share information in private or with a group. They will view life (past, present, and future) in a balanced light taking things as they happen without labelling them overtly positive or optimistic.',
        part4:
          'Note: Being lower in the enthusiasm doesn’t mean that you are sad. It means that the way you express positive emotions may be muted compared to those that are high in enthusiasm.',
        part5: 'Women are higher in enthusiasm than men.',
      },
      modHigh: {
        part1:
          'You are moderately high in enthusiasm and are sociable, excitable, happy, and easy to get to know.',
        part2:
          'Those moderately high in enthusiasm talk more and talk faster, which is accentuated in groups. Their speech can be animated, including laughing or giggling. There is a pull to be around people and where people are (parties, concerts, bars, etc.). They tend to be encouraging and focused on social aspect of the moment. Isolation or alone time can be irritating if it is a long duration.',
        part3:
          'People moderately high in enthusiasm keep people close and tend to share more details than less enthusiastic people. They will view life (past, present, and future) as being positive and optimistic (if high in neuroticism they will be more prone to having “higher highs” and “lower lows”).',
        part4:
          'Note: The higher the enthusiasm the more stimulation, excitement, activity, and fun are desired.  In relationships you may be considered dramatic or opinionated. Maladaptive levels of enthusiasm can come across as mania.',
        part5: 'Women are higher in enthusiasm than men.',
      },
      high: {
        part1:
          'You are high in enthusiasm and can be described as sociable, excitable, happy, and easy to get to know.',
        part2:
          'Those high in enthusiasm talk more and talk faster, more so in groups. They are also more animated in their speech, including laughing or giggling more often. There is a desire be around people and where people are (parties, concerts, bars, etc.) They tend to be more encouraging and people-focused in the moment. Isolation or alone time can exhaust or drain your energy.',
        part3:
          'People high in enthusiasm keep people close and are less concerned with keeping things private. They will view life (past, present, and future) more through a lens of positivity and optimism (if high in neuroticism they will be more prone to having “higher highs” and “lower lows”).',
        part4:
          'Note: The higher the enthusiasm the more stimulation, excitement, activity, and fun are desired.  In relationships you may be considered dramatic or opinionated. Maladaptive levels of enthusiasm can come across as mania.',
        part5: 'Women are higher in enthusiasm than men.',
      },
      veryHigh: {
        part1:
          'You are very high in enthusiasm and can be described as very sociable, excitable, happy, and easy to get to know.',
        part2:
          'Those very high in enthusiasm talk more and talk faster, which is accentuated in groups. They are very animated in their speech, including laughing or giggling a lot. There is a strong desire to be around people and where people are (parties, concerts, bars, etc.). They tend to be very encouraging, and they are laser focused on social aspect of the moment. Isolation or time alone can be very exhaustive or draining of energy.',
        part3:
          'People very high in enthusiasm keep people very close and keep very little private. They will view life (past, present, and future) as being very positive and optimistic (if high in neuroticism they will be more prone to going through “higher highs” and “lower lows”).',
        part4:
          'Note: The higher the enthusiasm the more stimulation, excitement, activity, and fun are desired.  In relationships you may be considered dramatic or opinionated. Maladaptive levels of enthusiasm can come across as mania.',
        part5: 'Women are higher in enthusiasm than men.',
      },
    },
    aspect2: {
      aspectName: Aspect.Assertiveness,
      veryLow: {
        part1:
          'You are very low in assertiveness, which means you do not like to engage in social settings or lead, almost always preferring others to step in first.',
        part2:
          'Conversationally, you don’t like or feel the need to inject your own opinions, which means you don’t dominate conversation and or seek to control social situations and will let others lead the way.',
        part3:
          'Note: The lower the assertiveness, the less impulsive, which means there can be a struggle to participate and put forward your own ideas. This can come across as disinterested, uninterested, or incompetence, which can make group work or social settings challenging.',
        part4: 'Women are slightly less assertive than men.',
      },
      low: {
        part1:
          'You are low in assertiveness, which means you do not like to engage in social settings or lead, almost always preferring others to step in first.',
        part2:
          'Conversationally, you don’t like or feel the need to inject your own opinions, which means you don’t dominate conversation and or seek to control social situations and will let others lead the way.',
        part3:
          'Note: The lower the assertiveness, the less impulsive, which means there can be a struggle to participate and put forward your own ideas. This can come across as disinterested, uninterested, or incompetence, which can make group work or social settings challenging.',
        part4: 'Women are slightly less assertive than men.',
      },
      modLow: {
        part1:
          'You are moderately low in assertiveness, which means you do not like act first or lead and prefer others to step in first.',
        part2:
          'Conversationally, you don’t like or feel the need to inject your own opinions, which means you don’t dominate conversation and or seek to control social situations, willing to let others lead the way.',
        part3:
          'Note: The lower the assertiveness, the less impulsive, which means there can be a struggle to participate and put forward your own ideas. This can come across as disinterested, uninterested, or incompetence, which can make group work or social settings challenging.',
        part4: 'Women are slightly less assertive than men.',
      },
      average: {
        part1:
          'You are average in assertiveness, which means you will sometimes act first or lead but often let others step in first.',
        part2:
          'Conversationally, you balance injecting your own opinions vs listening, which means you don’t often dominate or seek to control social situations, willing to let others lead the way.',
        part3:
          'Note: The lower the assertiveness, the less impulsive, which means there can be a struggle to participate and put forward your own ideas. This can come across as disinterested, uninterested, or incompetence, which can make group work or social settings challenging.',
        part4: 'Women are slightly less assertive than men.',
      },
      modHigh: {
        part1:
          'You are moderately high in assertiveness, which means you can be described as someone who is somewhat commanding or willing to take charge.',
        part2:
          'This aspect is also associated with being influential, captivating, and being a leader. Because of this, people moderately high in assertiveness put their own opinions forward more often, which leads them to be slightly more dominate and controlling in social situations. Assertive people are people of action and usually don’t wait for others to initiate or start social situations.',
        part3:
          'Note: The higher the assertiveness, the more impulsive, which means there can be a struggle to act without thinking. Also, assertiveness can come across as competence, which is not always the case and can lead to unfavorable outcomes.',
        part4: 'Women are slightly less assertive than men.',
      },
      high: {
        part1:
          'You are high in assertiveness, which means you can be described as someone who is commanding or willing to take charge.',
        part2:
          'This aspect is also associated with being influential, captivating, and being a leader. Because of this, people high in assertiveness put their own opinions forward (many times forcefully), which leads them to dominate and control social situations. Assertive people are people of action and usually don’t wait for others to initiate or start social situations.',
        part3:
          'Note: The higher the assertiveness, the more impulsive, which means there can be a struggle to act without thinking. Also, assertiveness can come across as competence, which is not always the case and can lead to unfavorable outcomes.',
        part4: 'Women are slightly less assertive than men.',
      },
      veryHigh: {
        part1:
          'You are very high in assertiveness, which means you can be described as someone who is commanding or willing to take charge.',
        part2:
          'This aspect is also associated with being influential, captivating, and being a leader. Because of this, people very high in assertiveness put their own opinions forward (many times forcefully), which leads them to dominate and control social situations. Assertive people are people of action and usually don’t wait for others to initiate or start social situations.',
        part3:
          'Note: The higher the assertiveness, the more impulsive, which means there can be a struggle to act without thinking. Also, assertiveness can come across as competence, which is not always the case and can lead to unfavorable outcomes.',
        part4: 'Women are slightly less assertive than men.',
      },
    },
  },
  {
    category: {
      categoryName: Ocean.Agreeableness,
      veryLow: {
        part1:
          'You are very low in agreeableness and less likely to be generous, nice, or nurturing and more likely to be perceived as tough-minded, callous, stubborn, or harsh.',
        part2:
          'Individuals that are very low in agreeableness do not focus on the problems of others and are not inclined to act out of empathy. Because they place greater significance on their own emotions, they are less concerned with hurt feelings, care less about the emotions/interests of others, and less interested in keeping the peace. They may instigate conflict on purpose and have difficulty learning from their mistakes.',
        part3:
          'Those very low in agreeableness place less significance on forgiving, being cooperative, accepting, flexible, gentle, and patient. They have very little empathy or pity and feel those who are excluded, punished, or defeated deserve it. Their high levels of skepticism may be a defense mechanism or protective element of their lives, which makes it hard to connect with people who have genuine intentions. They are not taken advantage of easily and tolerate or even enjoy arguments and heated discussions.',
        part4:
          'People very low in agreeableness easily bargain and negotiate for themselves in romantic partnerships, family relationships, friendships, and career settings (even at the cost or expense of others). They may even take advantage of other people in these social interactions. If this behavior is ignored, they can come across violent, ruthless, or vengeful, especially if they are higher in neuroticism. If they are lower in neuroticism, they could come across as uninvolved, willing to sacrifice meaningful relationships, or extremely selfish.',
      },
      low: {
        part1:
          'You are low in agreeableness and less likely to be generous, nice, and nurturing and more likely to be perceived as tough-minded, callous, stubborn, or harsh.',
        part2:
          'Individuals that are low in agreeableness do not focus on the problems of others and are not inclined to act out of empathy. They are less concerned with hurt feelings, care less about the emotions/interests of others, and less interested in keeping the peace in a situation.',
        part3:
          'Those low in agreeableness place less significance on forgiving, being cooperative, accepting, flexible, gentle, and patient. They place greater significance on their own emotions and may feel less empathy or pity for those who are excluded, punished, or defeated, and in some instance may feel it is deserved.  They have no qualms about arguments or heated discussion and may even enjoy it.',
        part4:
          'People low in agreeableness are less likely to be taken advantage of because it is easier for them to bargain/negotiate for themselves in romantic partnerships, family relationships, friendships, and career settings (even at the expense of others). If this behavior is ignored, they can come across too harsh, callous, or unkind especially if they are higher in neuroticism. If they are lower in neuroticism, they could come across as insensitive, uncaring, or selfish.',
      },
      modLow: {
        part1:
          'You are moderately low in agreeableness and are less likely to be generous, nice, or nurturing and more likely to be perceived as tough-minded, callous, stubborn, or harsh.',
        part2:
          'Individuals that are moderately low in agreeableness usually do not focus nor act on the problems of others. They are less concerned with hurt feelings, care less about the emotions/interests of others, and less interested in keeping the peace in a situation.',
        part3:
          'Those moderately low in agreeableness place less significance on forgiving, being cooperative, accepting, flexible, gentle, or patient. They place greater significance on their own emotions and needs, making them feel less empathy or pity for those who are excluded, punished, or defeated, and in some instance may feel it is deserved. This makes them more prone to arguments or heated discussions.',
        part4:
          'People moderately low in agreeableness are less likely to be taken advantage of because it is easier for them to bargain/negotiate for themselves in romantic partnerships, family relationships, friendships, career settings but not others. If this behavior is ignored, they can come across as too harsh, callous, or unkind, especially if they are higher in neuroticism. If they are lower in neuroticism, they could come across as insensitive, uncaring, or selfish.',
      },
      average: {
        part1:
          'You are average in agreeableness and strike more of a balance in caring for yourself as well as others.',
        part2:
          'Individuals that are average in agreeableness may or may not see the best in others, and it will depend on the situation or the other aspects of their personality. They are somewhat sensitive to when feelings are hurt but not so much that they will ignore their own emotions/interests over other.',
        part3:
          'Those with average agreeableness strikes a good balance between being cooperative or competitive, being accepting or rejecting, and being gentle or forceful. They don’t always feel others’ emotions and but are still able to, which allows them to have a normal sense of empathy or compassion for those who are excluded, punished, or defeated.',
        part4:
          'People average in agreeableness are usually not likely taken advantage of and can find an appropriate time for arguments or heated discussions. Behaviorally, they can usually find a good balance of self-interest and others’ interest in romantic partnerships, family relationships, friendships, and career settings. They may or may not feel resentment or anger as strongly as those that are higher in agreeableness, but it would depend on the situation. Extraversion or Neuroticism may impact how they view the importance of their needs met vs the needs of others.',
      },
      modHigh: {
        part1:
          'You are moderately high in agreeableness and are more likely to be generous, nice, and nurturing.',
        part2:
          'Individuals that are moderately high in agreeableness will see the best in others and act accordingly. For example, they do not like feelings hurt, care more about the emotions/interests of others, and motivated to keeping the peace.',
        part3:
          'Those moderately high in agreeableness think it is important to be forgiving, cooperative, accepting, flexible, gentle, and patient. They feel the emotions of others and feel empathy or pity for those who are excluded, punished, or defeated. For this reason, they are more likely to disklike competition, arguments, or heated discussion.',
        part4:
          'People moderately high in agreeableness are more likely to be taken advantage because it is harder for them to bargain/negotiate for themselves in romantic partnerships, family relationships, friendships, and career settings. If this behavior is ignored, it can create resentment, hidden anger, or passive-aggression if they are higher in neuroticism, or it can cause passive conformity if they are lower in neuroticism.',
      },
      high: {
        part1:
          'You are high in agreeableness and are more likely to be generous, nice, and nurturing.',
        part2:
          'Individuals that are high in agreeableness will see the best in others and will act accordingly. For example, they do not like feelings hurt, care more about the emotions/interests of others, and are motivated to keep the peace.',
        part3:
          'Those high in agreeableness think it is important to be forgiving, cooperative, accepting, flexible, gentle, and patient. They feel the emotions of others and may strongly feel empathy or pity for those who are excluded, punished, or defeated. Note: This causes a dislike or distrust of competition, arguments, or heated discussions.',
        part4:
          'People high in agreeableness are more likely to be taken advantage because it is harder for them to bargain/negotiate for themselves in romantic partnerships, family relationships, friendships, and career settings. If this behavior is ignored, it can create resentment, hidden anger, or passive-aggression if they are higher in neuroticism, or it can create passive conformity if they are lower in neuroticism.',
      },
      veryHigh: {
        part1:
          'You are very high in agreeableness and can be described as extremely generous, nice, and nurturing.',
        part2:
          'Individuals that are very high in agreeableness will almost always see the best in others and will strongly act accordingly. For example, they do not like feelings hurt, care more about the emotions/interests of others, and desire to keep the peace, even if comes across as overbearing or micromanaging or at a loss to themselves.',
        part3:
          'It is important for those very high in agreeableness to be forgiving, cooperative, accepting, flexible, gentle, and patient. They feel the emotions of others more deeply and may feel overwhelming empathy or pity for those who are excluded, punished, or defeated. Note: This causes an intense dislike or distrust of competition, arguments, or heated discussions.',
        part4:
          'People very high in agreeableness can be to be taken advantage of easily as they may be too self-sacrificing in romantic partnerships, family relationships, friendships, and career settings. If this behavior is ignored, it can create resentment, hidden anger, or passive-aggression if they are higher in neuroticism, or it can cause extreme passive conformity if they are lower in neuroticism.',
      },
    },
    aspect1: {
      aspectName: Aspect.Compassion,
      veryLow: {
        part1:
          'You are very low in compassion and can be considered unsympathetic, blunt, mean, or disinterested in problems of others.',
        part2:
          'Individuals very low in compassion almost never sympathize with other people and are disinterested in the problems of other people. Their focus in always on themselves, while ignoring the needs of other. They are willing to engage in conflict and competition, even at the expense of the feelings of others.',
        part3:
          'Remember, the lower other-oriented you are, the easier it will be to take time or give energy to your own needs. You may need training to help you connect with others or their problems. This will help you care for then needs of family, career-peers, and friendship. Very low compassionate people may be extremely neglectful or unaware of the needs of children, family members, or friends.',
      },
      low: {
        part1:
          'You are low in compassion and are likely to be unsympathetic, blunt, mean, and less interested in the problems of others.',
        part2:
          'Low compassionate people have a harder time sympathism or being interested in the problems of other people. Their focus in on them themselves rather than focusing on helping others avoid negative aspects of life. They are willing to engage in conflict and competition even at the expense of others.',
        part3:
          'Remember, the lower other-oriented you are, the easier it will be to take time or give energy to your own needs. You may need training to help you connect with others and their needs so that you can successfully care for then needs of family, career-peers, and friendship. Low compassionate people may neglect or be unaware of the needs of children, family members, or friends.',
      },
      modLow: {
        part1:
          'You are moderately low in compassion and are less likely to be sympathetic, caring, or a patient listener.',
        part2:
          'Individuals that are moderately low in compassion usually do not sympathize, inquire, or are interested in the problems of other people. Their focus is on them themselves and aspects of their life rather than helping others avoid negative aspects of life. They are willing to engage in conflict and competition, even at the expense of making others uncomfortable.',
        part3:
          'Remember, the lower other-oriented you are, the easier it will be to take time or give energy to your own needs. You may need training to help you connect with others and their needs so that you can successfully care for the needs of family, career-peers, and friends. Moderately low compassionate people may neglect or be unaware of the needs of children, family members, or friends.',
      },
      average: {
        part1:
          'You are average in compassion and are not overly sympathetic or compelled to intervene in the problems of others.',
        part2:
          'Individuals that are average in compassion can and will sympathize with others but are often willing to disengage if too much of their own interests are being subverted. They have a balanced view of their own interest in comparison to the interest of others, which means they have a better balance of the time or give energy they give to themselves as well as others.',
        part3:
          'Depending on other areas of their personality, they will express the intertest in others but usually not the first to do so. They try to balance their own interest to that of their family, career, and friendship. Those average in compassion manage not to ignore or overprotect their children, family members, or friends.',
      },
      modHigh: {
        part1:
          'You are moderately high in compassion and on average more sympathetic, a better listener, and more caring.',
        part2:
          'Moderately high compassionate people sympathize, inquire, and are interested in the problems of other people but also animals and the environment. They focus on helping others avoid negative aspects of life, but it may come at the individual’s expense.',
        part3:
          'Moderately high compassionate people will focus on the needs of other even above their own. Remember, the higher other-oriented you are, the harder it will be to take time or give energy to your own needs. You may need negotiation or assertiveness training so that your needs can be met in family, career, and friendship settings. Moderately high compassionate people may be protective of children, family members, or friends.',
      },
      high: {
        part1:
          'You are high in compassion and are more likely to be sympathetic, nice, a thoughtful listener, and caring.',
        part2:
          'Those that are high in compassion sympathize, inquire, and are interested in the problems of other people but also animals and the environment. They will focus on helping others avoid negative aspects of life, even at their own expense.',
        part3:
          'Individuals high in compassion will focus on the needs of other even above their own. Remember, the higher other-oriented you are, the harder it will be to take time or give energy to your own needs. You may need negotiation or assertiveness training so that your needs can be met in family, career, and friendship settings. High compassionate people may be overprotective of children, family members, or friends.',
      },
      veryHigh: {
        part1:
          'You are very high in compassion and can be described as very sympathetic, nice, a thoughtful listener, and extremely caring.',
        part2:
          'Those that are very high in compassion almost always sympathize, inquire, and are interested in the problems of other people, animals, and the environment. Not only are they conflict avoidant, but they will give precedent to helping others avoid negative aspects of life, even at their own expense.',
        part3:
          'Individuals very high in compassion will feel extremely compelled to focus on the needs of other far above their own. Remember, the higher other-oriented you are, the harder it will be to take time or give energy to your own needs. You may even ignore the instinct that you have your own needs that need to be met. You may need negotiation or assertiveness training so that your needs can be met in family, career, and friendship settings. Very high compassionate people are extremely overprotective of children, family members, or friends.',
      },
    },
    aspect2: {
      aspectName: Aspect.Politeness,
      veryLow: {
        part1:
          'You are very low in politeness and have no problems challenging authority and may struggle with obedience. ',
        part2:
          'You may believe that you are better than others, enjoy engaging in conflict, and express your thoughts and views without regard to other people’s feelings. If you do feel respect toward authority, it may because it is demanded, fear of punishment, or you admire that authority.',
        part3:
          'People who are very low in politeness feel that respect is earned, and they are willing or even enjoy pushing back when challenged. They enjoy confronting other people, will always weigh their own interests higher than others.',
        part4:
          'It is important to note that that those very low in politeness are more likely to deal with conduct-disorders, antisocial disorder, or criminal behavior. They are highly skeptical of any authority and can manifest hyper-dominance, rather than submission (especially if low in neuroticism). This make social integration difficult, especially if they are outperformed by someone or make a mistake.',
      },
      low: {
        part1:
          'You are low in politeness and are less likely to respect authority, believe you are better than others, to engage in conflict or express your thought and views without regard to other people’s feelings.',
        part2:
          'People who are low feel that respect should be earned, and they are willing to push back when challenged. They can confront other people because they may weigh their own interests higher than others. This also leads to less resentment because they will not do or give what they do not want to.',
        part3:
          'Those low in politeness can be seen as competitive and less like to be taken advantage of.',
      },
      modLow: {
        part1:
          'You are moderately low in politeness and are less likely to respect authority, believe you are better than others, and engage in conflict or express your thoughts and views without regard to other people’s feelings.',
        part2:
          'People who are moderately low feel that respect should be earned, and they are willing to push back when challenged. They can confront other people because they weigh their own interests higher than that of others. This also leads to less resentment because they will not do or give what they do not want to.',
        part3:
          'Those moderately low in politeness can be seen as competitive and are less like to be taken advantage of.',
      },
      average: {
        part1: 'You are average in politeness and are deferential to authority.',
        part2:
          'Most of the time you will respect authority unless given a reason not to, and do not engage in conflict unless needed or pushed. Most of the time you will express your thoughts and views, while also regarding people’s feelings.',
        part3:
          'People who are average in politeness feel that most people should be respected and will only push back on ideas or situations if needed. Though it may be slightly uncomfortable to confront others, those average in politeness will if they feel that their interest of being neglected or taken advantage of.',
        part4:
          'Those with average levels of politeness strike a good balance between weighing their own interests to that of others, which also allows you to minimize resentment.',
        part5:
          'Those average in politeness can be competitive when needed and usually are not taken advantage of.',
      },
      modHigh: {
        part1:
          'You are moderately high in politeness and are more obedient and respectful of authority than average.',
        part2:
          'Respect for others is important for individuals moderately high in politeness, and they dislike being pushy. They don’t like engaging in conflict or expressing their thoughts and views without regard to other people’s feelings.',
        part3:
          'People who are moderately high in politeness feel that respect is implicit and that levels of authority are meant to be followed, which makes it difficult to challenge other people. They will avoid conflict and dislike of confrontation or fights, even if it is healthy or needed in specific situations.',
        part4:
          'Those moderately high in politeness do not enjoy competition (from sports to job markets, and even to the animal kingdom’s predatory nature).  They may be taken advantage of more easily as they may feel it is their duty to do more even at the cost of their own resources.',
      },
      high: {
        part1: 'You are high in politeness and are obedient and respectful of authority.',
        part2:
          'Respect for others is important for individuals high in politeness, and they do not like to seem pushy. They are averse to engaging in conflict or expressing their thoughts and views without regard to other people’s feelings.',
        part3:
          'People who are high in politeness feel that respect is implicit and that levels of authority are meant to be followed, which makes it difficult to challenge other people. They will avoid conflict and have a dislike of confrontation or fights, even if it is healthy or needed in specific situations.',
        part4:
          'Those high in politeness have a dislike of competition (from sports to job markets, and even to the animal kingdom’s predatory nature).  They may be taken advantage of more easily as they may feel it is their duty to do more even at the cost of their own resources.',
      },
      veryHigh: {
        part1:
          'You are very high in politeness and are markedly obedient and very respectful of authority.',
        part2:
          'Respect for others is very important for individuals very high in politeness, and they hate to seem pushy. They are extremely averse to engaging in conflict or expressing their thoughts and views without regard to other people’s feelings.',
        part3:
          'People who are very high in politeness feel that respect is implicit and that levels of authority are meant to be followed, which makes it difficult to challenge other people. They will avoid conflict and have a very intense dislike of confrontation or fights, even if it is healthy or needed in specific situations.',
        part4:
          'Those very high in politeness have an aversion to competition (from sports to job markets, and even to the animal kingdom’s predatory nature).  They may be taken advantage of more easily as they may feel it is their duty to do more even at the cost of their own resources.',
      },
    },
  },
  {
    category: {
      categoryName: Ocean.Neuroticism,
      veryLow: {
        part1:
          'You are very low in neuroticism and rarely feel levels of negative emotions when exposed to stress, which causes a very positive outlook on your success, satisfaction, and even problems in your life.',
        part2:
          'If positive or fortunate things happen to those with very low neuroticism, they accept it easily without question. If they experience failure or setbacks or periods of time that are unhappy, anxious, or irritable, they can cope and recover quickly. They are very good a navigating life’s storms.',
        part3:
          'With very low levels of neuroticism, individuals will not worry so much about mental and physical health, have far fewer physician and emergency room visits, and have less absenteeism at work and at school. For this reason, they have very high resilience against anxiety, depression, and self-esteem disorders.',
        part4:
          'Individuals with very low levels of neuroticism can handle risk more effectively or enthusiastically if high in extraversion. Because of this, there is little concern with security or loss in recreational, career, financial and social situations, which allows them to handle changes and transformations in their lives better.',
        part5:
          'Females tend to be higher in neuroticism than males. In part, this may be why women report more unhappiness in their relationships, at work, in school and with their health than men, on average, and why women initiate more divorces.',
      },
      low: {
        part1:
          'You are low in neuroticism and rarely feel levels of negative emotions when exposed to stress, which causes a very positive outlook on your success, satisfaction, and even problems in your life.',
        part2:
          'If positive or fortunate things happen to those with low neuroticism, they accept it easily without question. If they experience failure or setbacks or periods of time that are unhappy, anxious, or irritable, they can cope and recover quickly. They are very good a navigating life’s storms.',
        part3:
          'With lower levels of neuroticism, individuals will not worry so much about mental and physical health, have far fewer physician and emergency room visits, and have less absenteeism at work and at school. For this reason, they have very high resilience against anxiety, depression, and self-esteem disorders.',
        part4:
          'Individuals with low levels of neuroticism can handle risk more effectively or enthusiastically if high in extraversion. Because of this, there is little concern with security or loss in recreational, career, financial and social situations, which allows them to handle changes and transformations in their lives better.',
        part5:
          'Females tend to be higher in neuroticism than males. In part, this may be why women report more unhappiness in their relationships, at work, in school and with their health than men, on average, and why women initiate more divorces.',
      },
      modLow: {
        part1:
          'You have moderately low levels of neuroticism and feel less levels of negative emotions when exposed to stress, which causes a better outlook on your success, satisfaction, and even problems in your life.',
        part2:
          'When positive or fortunate things happen to those with moderately low neuroticism, they accept it without question. If they experience failure or setbacks or periods of time that are unhappy, anxious, or irritable, they can cope or tolerate it better. They can more easily navigate life’s storms than those high in neuroticism. ',
        part3:
          'With moderate levels of neuroticism, individuals worry less about mental and physical health, have less visits to their doctors or ERs, and don’t miss a lot of work or school. For this reason, they have a very high resilience against anxiety, depression, and self-esteem disorders.',
        part4:
          'Individuals with moderately low levels of neuroticism usually deal better with risk, which means they aren’t worried as much with security or loss in recreational, career, financial and social situations. They can also handle changes and transformations in their lives better than those high in neuroticism.',
        part5:
          'On average, females tend to be higher in neuroticism than males. In part, this may be why women report more unhappiness in their relationships, at work, in school and with their health than men, on average, and why women initiate more divorces.',
      },
      average: {
        part1:
          'You have average levels of neuroticism and feel normal levels of negative emotions when exposed to stress, which causes a balanced outlook on your success, satisfaction, and even problems in your life.',
        part2:
          'When positive or fortunate things happen to those with average levels of neuroticism, they usually accept it without questions. If they experience failure or setbacks or periods of time that are unhappy, anxious, or irritable, they can cope better or be more tolerant of that situation. They usually aren’t too derailed when navigating life’s storms and can move past them.',
        part3:
          'With average levels of neuroticism, individuals have reasonable concern about mental and physical health, have normal visits to their doctors or ERs, and don’t miss a lot of work or school. They are also not overly sensitive to anxiety, depression, or self-esteem disorders.',
        part4:
          'Individuals with average levels of neuroticism usually don’t’ avoid risk without a specific reason, but they also won’t unnecessarily rush into it.  They aren’t as focused on security or impacted as deeply by loss in recreational, career, financial and social situations if the events aren’t too extreme.  They can also handle changes and transformations in their lives better than those high in neuroticism. If these situations get to painful or hurtful, they can usually recover reasonably.',
        part5:
          'Females tend to be higher in neuroticism than males. In part, this may be why women report more unhappiness in their relationships, at work, in school and with their health than men, and why women initiate more divorces.',
      },
      modHigh: {
        part1:
          'You are moderately high in neuroticism and can feel high levels of negative emotions when exposed to stress, which will cause a negative view of success, satisfaction, and problems in your life.',
        part2:
          'When positive or fortunate things happen to individuals with higher neuroticism, they will wonder if they deserve it. Failure or setbacks can be difficult to navigate, taking an emotional toll.',
        part3:
          'With higher levels of neuroticism, individuals will worry more about mental and physical health, have far more physician and emergency room visits, and have frequent absenteeism at work and at school (especially if matched with lower levels of conscientiousness). For this reason, they have a risk for developing anxiety and struggling with coping skills, depression, and self-esteem disorders (more so if low in extraversion).',
        part4:
          'With moderate levels of neuroticism comes a certain level of risk aversion. Because of this, there will be an avoidance of recreational, career, financial and social situations where there is a possibility of loss. Their focus is with maintaining their status, rather than enhancing it.',
        part5:
          'On average, females tend to be higher in neuroticism than males. In part, this may be why women report more unhappiness in their relationships, at work, in school and with their health than men, and why women initiate more divorces.',
      },
      high: {
        part1:
          'You are high in neuroticism and can feel high levels of negative emotions when exposed to stress, which will cause a negative view of success, satisfaction, and problems in your life.',
        part2:
          'When positive or fortunate things happen to individuals with higher neuroticism, they will wonder if they deserve it. Failure or setbacks can be very devastating.',
        part3:
          'With higher levels of neuroticism, individuals will worry more about mental and physical health, have far more physician and emergency room visits, and have frequent absenteeism at work and at school (especially if matched with lower levels of conscientiousness). For this reason, they have a very high risk for developing anxiety and struggling with coping skills, depression, and self-esteem disorders.',
        part4:
          'With very high levels of neuroticism comes high levels risk aversion. Because of this, there will be an avoidance of recreational, career, financial and social situations where there is a possibility of loss. Their focus is with maintaining their status, rather than enhancing it.',
        part5:
          'On average, females tend to be higher in neuroticism than males. In part, this may be why women report more unhappiness in their relationships, at work, in school and with their health than men, and why women initiate more divorces.',
      },
      veryHigh: {
        part1:
          'You are very high in neuroticism and can feel intense levels of negative emotions when exposed to stress, which will cause a negative view of success, satisfaction, and problems in your life.',
        part2:
          'When positive or fortunate things happen to individuals with higher neuroticism, they will wonder if they deserve it, and if failure or setbacks are experienced, it can be very devastating.',
        part3:
          'With higher levels of neuroticism, individuals will worry more about mental and physical health, have far more physician and emergency room visits, and have frequent absenteeism at work and at school (especially if matched with lower levels of conscientiousness). For this reason, they have a very high risk for developing anxiety and struggling with coping skills, depression, and self-esteem disorders.',
        part4:
          'With very high levels of neuroticism comes extremely high levels risk aversion. Because of this, there will be an avoidance of recreational, career, financial and social situations where there is a possibility of loss. Their focus is with maintaining their status, rather than enhancing it.',
        part5:
          'On average, females tend to be higher in neuroticism than males. In part, this may be why women report more unhappiness in their relationships, at work, in school, and with their health than men, and why women initiate more divorces.',
      },
    },
    aspect1: {
      aspectName: Aspect.Withdrawal,
      veryLow: {
        part1:
          'You are very low in withdrawal, which means you rarely suffer from anticipatory anxiety, and if you do, you are not impeded by it.',
        part2:
          'You can perform quite well in new, uncertain, unexpected, threatening, or complex situations. You do not avoid or withdraw in the face of the unknown and unexpected and can thrive, especially if you are high in extraversion.',
        part3:
          'People with very low levels of withdrawal are more resilient against feeling sad, lonesome, disappointed, and grief-stricken, and if you do, not deeply nor too long. Very rarely do they wrestle with doubt and worry, embarrassment, self-consciousness, and discouragement in the face of threat and punishment. They are not affected by social rejection, and don’t feel hurt too easily. Even when hurt, frightened, or anxious, they can recover quickly.',
        part4:
          'People with average levels of withdrawal are not particularly concerned that something bad is going to happen',
        part5:
          'Note: The lower the levels of withdrawal, the higher the chance of engaging in or being unaware of risky situations.',
        part6: 'Women are higher in withdrawal than men.',
      },
      low: {
        part1:
          'You are low in withdrawal, which means you rarely suffer from anticipatory anxiety, and if you do, you are not impeded by it.',
        part2:
          'You can perform quite well in new, uncertain, unexpected, threatening, or complex situations. You do not avoid or withdraw in the face of the unknown and unexpected and can thrive, especially if you are high in extraversion.',
        part3:
          'People with low levels of withdrawal are more resilient against feeling sad, lonesome, disappointed, and grief-stricken, and if you do, not deeply nor too long. Very rarely do they wrestle with doubt and worry, embarrassment, self-consciousness, and discouragement in the face of threat and punishment. They are not affected by social rejection, and don’t feel hurt too easily. Even when hurt, frightened, or anxious, they can recover quickly.',
        part4:
          'People with average levels of withdrawal are not particularly concerned that something bad is going to happen.',
        part5:
          'Note: The lower the levels of withdrawal, the higher the chance of engaging in or being unaware of risky situations.',
        part6: 'Women are higher in withdrawal than men. ',
      },
      modLow: {
        part1:
          'You are moderately low in withdrawal, which means you don’t often suffer from anticipatory anxiety, and if you do, you are not impeded by it.',
        part2:
          'You can handle new, uncertain, unexpected, threatening, or complex situations easily. You do not avoid or withdraw in the face of the unknown and unexpected.',
        part3:
          'People with moderately low levels of withdrawal are less prone feel sad, lonesome, disappointed, and grief-stricken, and if you do, not deeply nor too long. They have less levels of doubt and worry, embarrassment, self-consciousness, and discouragement in the face of threat and punishment.',
        part4:
          'You are less affected or sensitive to social rejection, and don’t feel hurt too easily. Even when hurt, frightened, or anxious, they can recover quickly.',
        part5:
          'People with average levels of withdrawal are not particularly concerned that something bad is going to happen.',
        part6: 'Women are higher in withdrawal than men.',
      },
      average: {
        part1:
          'You are average in withdrawal, which means you may occasionally suffer from anticipatory anxiety, but are generally not impeded by it.',
        part2:
          'Individuals with average levels of withdrawal can handle new, uncertain, unexpected, threatening, or complex situations quite well. They are not more likely to avoid or withdraw in the face of the unknown and unexpected.',
        part3:
          'People with average levels of withdrawal sometimes feel sad, lonesome, disappointed, and grief-stricken, but not too deeply, and not for too long. They experience normal levels of doubt and worry, embarrassment, self-consciousness, and discouragement in the face of threat and punishment. They are reasonably but not excessively sensitive to social rejection, and don’t feel hurt too easily. Even when hurt, frightened, or anxious, they can recover in a reasonable amount of time.',
        part4:
          'People with typical levels of withdrawal are not particularly concerned that something bad is going to happen.',
        part5: 'Women are higher in withdrawal than men.',
      },
      modHigh: {
        part1:
          'You are moderately high in withdrawal, which means you may feel higher than average levels of anticipatory anxiety.',
        part2:
          'This makes it more challenging for you to approach new, uncertain, unexpected, threatening, or complex situations, which means you are more likely to avoid or withdraw from those situations.',
        part3:
          'People moderately high in withdrawal are a bit more likely than average to feel sad, lonesome, disappointed, and grief-stricken. They tend to somewhat higher levels of doubt and worry, become embarrassed a bit more easily, are self-conscious and may get discouraged more rapidly in the face of threat and punishment.',
        part4:
          'They feel more anticipatory anxiety than the average person. They are somewhat sensitive to social rejection and can feel more hurt than might be expected. Once hurt, frightened, or anxious, as well, it takes them somewhat longer to recover.',
        part5: 'Women are higher in withdrawal than men.',
      },
      high: {
        part1:
          'You are high in withdrawal, which means you may feel very high levels of anticipatory anxiety.',
        part2:
          'New, uncertain, unexpected, threatening, or complex situations are extremely difficult for you, and you are more likely to avoid or withdraw in these situations.',
        part3:
          'People high in withdrawal are very prone to feel sad, lonesome, disappointed, and grief-stricken, while also having very high levels of doubt and worry.',
        part4:
          'Note: Being this high in this trait means becoming embarrassed easily, are more self-conscious, and get discouraged rapidly in the face of threat and punishment.',
        part5:
          'People with high levels of withdrawal are very sensitive to social rejection. If they are stirred up, it takes them a long time to calm down, and are also very extremely concerned that something bad might happen.',
        part6: 'Women are higher in withdrawal than men.',
      },
      veryHigh: {
        part1:
          'You are very high in withdrawal, which means you may feel very high levels of anticipatory anxiety.',
        part2:
          'New, uncertain, unexpected, threatening, or complex situations are extremely difficult for you, and you are more likely to avoid or withdraw in these situations.',
        part3:
          'People very high in withdrawal are very prone to feel sad, lonesome, disappointed, and grief-stricken, while also having very high levels of doubt and worry.',
        part4:
          'Note: Being this high in this trait means becoming embarrassed easily, are more self-conscious, and get discouraged rapidly in the face of threat and punishment.',
        part5:
          'People with very high levels of withdrawal are very sensitive to social rejection. If they are stirred up, it takes them a long time to calm down, and are also very extremely concerned that something bad might happen.',
        part6: 'Women are higher in withdrawal than men.',
      },
    },
    aspect2: {
      aspectName: Aspect.Volatility,
      veryLow: {
        part1:
          'You are every low in volatility and are extraordinarily stable and predictable in your moods.',
        part2:
          'Individual very low in volatility aren’t impacted as much by negative emotion and very rarely irritable, experience disappointment, frustration, or pain.',
        part3:
          'Being very low in this trait means you are extremely easy and calming and rarely express frustration, disappointment, and irritability.',
        part4:
          'If you are pushed to become stirred up, upset, angry or irritated, you calm down almost immediately. You are rarely argumentative and almost never lose their composure. Even if exceptionally provoked in a dispute, a person this low in volatility will rarely react, remaining calm and unperturbed.',
        part5:
          'Note: People who are high in volatility get very upset if something bad happens, while people high in withdrawal are anxious about bad things that might happen.',
        part6: 'Women are higher in volatility than men.',
      },
      low: {
        part1: 'You are low in volatility, which means your mood is very stable.',
        part2:
          'People low in this trait are not as irritable, strongly affected by disappointment, frustration, pain, or the threat of isolation.',
        part3:
          'They are not prone to lash out or be easily annoyed, while they more reasonably express their frustration, disappointment, and irritability. Even if stirred up, upset, angry, irritated, they calm down quickly.',
        part4:
          'Being lower in volatility means being less argumentative than average and rarely lose their composure. If overly provoked in a dispute, a person of average volatility may react in kind (particularly if also low in agreeableness). However, such people tend to remain calm and unperturbed, even when stressed.',
        part5:
          'Note: People who are high in volatility get very upset if something bad happens, while people high in withdrawal are anxious about bad things that might happen.',
        part6: 'Women are higher in volatility than men.',
      },
      modLow: {
        part1: 'You are moderately low in volatility, which means your mood is generally stable.',
        part2:
          'People low in this trait are not as irritable, strongly affected by disappointment, frustration, pain, or the threat of isolation.',
        part3:
          'They are not prone to lash out or be easily annoyed, while they more reasonably express their frustration, disappointment, and irritability. Even if stirred up, upset, angry, irritated, they calm down quickly.',
        part4:
          'Being lower in volatility means being less argumentative than average and rarely lose their composure. If overly provoked in a dispute, a person of average volatility may react in kind (particularly if also low in agreeableness). However, such people tend to remain calm and unperturbed, even when stressed.',
        part5:
          'Note: People who are higher in volatility get very upset if something bad happens, while people high in withdrawal are anxious about bad things that might happen.',
        part6: 'Women are higher in volatility than men.',
      },
      average: {
        part1: 'You are average in volatility, which means your mood is usually stable.',
        part2:
          'People average in this trait may sometimes feel irritable, disappointed, and frustrated when they experience negative emotion, but they can recover faster than those that are higher in this trait.',
        part3:
          'They are not prone to lash out or be annoyed unless pushed, and they reasonably express their frustration, disappointment, and irritability. If stirred up, upset, angry, irritated, they may react but can also recover faster than those higher in volatility.',
        part4:
          'Being average in volatility means being less argumentative and don’t often loose composure. If overly provoked in a dispute, a person of average volatility may react in kind (particularly if also low in agreeableness). However, such people tend regain their calm and become less perturbed.',
        part5:
          'Note: People who are higher in volatility get very upset if something bad happens, while people high in withdrawal are anxious about bad things that might happen.',
        part6: 'Women are higher in volatility than men.',
      },
      modHigh: {
        part1: 'You are moderately high in volatility, which means you tend to vary in your mood.',
        part2:
          'People high in this trait can be irritable, more affected by disappointment, frustration, pain, and the threat of isolation.',
        part3:
          'They are more prone to lash out, be annoyed, act out or express their frustration, disappointment, and irritability. Because they can be stirred up and upset, they will need more time to recover.',
        part4:
          'Conversationally, they may be argumentative or lose their composure. Note: People who are higher in volatility get very upset if something bad happens, while people high in withdrawal are anxious about bad things that might happen.',
        part5: 'Women are higher in volatility than men.',
      },
      high: {
        part1:
          'You are high in volatility, which means you tend to vary a great deal in your mood.',
        part2:
          'People high in this trait can be very irritable, strongly affected by disappointment, frustration, pain, and the threat of isolation.',
        part3:
          'They are more prone to lash out, be easily annoyed, act out or express their frustration, disappointment, and irritability. Because they can be easily stirred up and upset, they have a long recovery time.',
        part4:
          'Conversationally, they may be argumentative or lose their composure. Note: People who are higher in volatility get very upset if something bad happens, while people high in withdrawal are anxious about bad things that might happen.',
        part5: 'Women are higher in volatility than men.',
      },
      veryHigh: {
        part1:
          'You are very high in volatility, which means you tend to vary a great deal in your mood.',
        part2:
          'People high in this trait can be very irritable, strongly affected by disappointment, frustration, pain, and the threat of isolation.',
        part3:
          'They are more prone to lash out, be easily annoyed, act out or express their frustration, disappointment, and irritability. Because they can be easily stirred up and upset, they have a long recovery time.',
        part4:
          'Conversationally, they may be argumentative or lose their composure. Note: People who are higher in volatility get very upset if something bad happens, while people high in withdrawal are anxious about bad things that might happen.',
        part5: 'Women are higher in volatility than men.',
      },
    },
  },
];

export default interpretations;
