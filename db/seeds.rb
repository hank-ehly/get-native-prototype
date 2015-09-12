Category.create!([
  {name: "Language Issues"},
  {name: "Social Situations"},
  {name: "Professional Activities"}
])
Collocation.create!([
  {description: nil, quote: "非常に重視する傾向があります", video_script_id: 19},
  {description: nil, quote: "よく言われることですが", video_script_id: 19},
  {description: "調和を重視する ・ 和を重要視する ・ 協調に軸足を置く ・ マッチングを重視する ・ 協調性を重視する ・ 協調を重視する ・ 調和を重んじる ・ 協調を重んじる", quote: "「和」を重んじ", video_script_id: 19},
  {description: nil, quote: "チームの中でコンセンサスを取る", video_script_id: 19},
  {description: "取引を終わらせる", quote: "会社で決済を受ける以前に、関係部署の了解を得ます", video_script_id: 19},
  {description: nil, quote: "必要な情報をあらかじめ伝えておく", video_script_id: 19},
  {description: nil, quote: "逆の言い方をすれば", video_script_id: 19},
  {description: nil, quote: "大きなミス", video_script_id: 19},
  {description: nil, quote: "情報を関係者に与え", video_script_id: 19},
  {description: nil, quote: "状況にもよりますけれども", video_script_id: 17},
  {description: nil, quote: "マイナスにとらえる", video_script_id: 17},
  {description: nil, quote: "まだ残っている", video_script_id: 17},
  {description: nil, quote: "会社を退職する", video_script_id: 17},
  {description: nil, quote: "ネガティブにとらえられるような理由付け", video_script_id: 17},
  {description: nil, quote: "円満退社を心がけます", video_script_id: 17},
  {description: nil, quote: "一つの会社に一生勤めるいわゆる終身雇用制", video_script_id: 17},
  {description: nil, quote: "大きく変わってきています", video_script_id: 17},
  {description: nil, quote: "ベストな選択", video_script_id: 17},
  {description: nil, quote: "好意的なものとして受け入れらるようになってきている", video_script_id: 17}
])
Language.create!([
  {name: "Japanese", code: "JA"},
  {name: "English", code: "EN"}
])
Speaker.create!([
  {language_id: 1, age_group: nil, name: "Shoji Onishi", description: nil, gender: true, location: "Kyoto, Japan"},
  {language_id: nil, age_group: nil, name: "Eriko Ishikawa", description: nil, gender: false, location: "Saitama, Japan"},
  {language_id: 1, age_group: nil, name: "Satoru Kajiura", description: nil, gender: true, location: "Tokyo, Japan"},
  {language_id: 1, age_group: nil, name: "Kentaro Asai", description: nil, gender: true, location: "Tokyo, Japan"},
  {language_id: 1, age_group: nil, name: "Koji Kodama", description: nil, gender: true, location: "Los Angeles, USA"},
  {language_id: 1, age_group: nil, name: "Takamasa Miyauchi", description: nil, gender: true, location: "Yokohama, Japan"},
  {language_id: 1, age_group: nil, name: "Fumiaki Nakayasu", description: nil, gender: true, location: "Osaka, Japan"},
  {language_id: 1, age_group: nil, name: "Kazuko Kodama", description: nil, gender: false, location: "Shizuoka, Japan"},
  {language_id: 1, age_group: nil, name: "Shoji Onishi", description: nil, gender: true, location: "Shiga, Kyoto"},
  {language_id: 1, age_group: nil, name: "Keita Sugai", description: nil, gender: true, location: "Chiba, Japan"}
])
Topic.create!([
  {category_id: 1, name: "Which Language to Speak"},
  {category_id: 2, name: "Gift Giving"},
  {category_id: 3, name: "Race, Color, and Gender"},
  {category_id: 3, name: "Getting Side Tracked"},
  {category_id: 3, name: "Type of Office"},
  {category_id: 3, name: "Ability versus Connections"},
  {category_id: 3, name: "Women Executives"},
  {category_id: 3, name: "Loyalty to Self versus Company"},
  {category_id: 3, name: "Working in Groups"},
  {category_id: 3, name: "Putting Things in Writing"}
])
Video.create!([
  {speaker_id: 1, topic_id: 1, language_id: 1, code: "FYa2kNRf2Wg", length: 76, category_id: 1, thumbnail_url: "http://i1.ytimg.com/vi/FYa2kNRf2Wg/default.jpg"},
  {speaker_id: 2, topic_id: 2, language_id: 1, code: "NYKewOxDf_M", length: 65, category_id: 2, thumbnail_url: "http://i1.ytimg.com/vi/NYKewOxDf_M/default.jpg"},
  {speaker_id: 4, topic_id: 4, language_id: 1, code: "b-HvyhHtfj0", length: 52, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/b-HvyhHtfj0/default.jpg"},
  {speaker_id: 5, topic_id: 5, language_id: 1, code: "nXoUngpDz7Y", length: 90, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/nXoUngpDz7Y/default.jpg"},
  {speaker_id: 6, topic_id: 5, language_id: 1, code: "1QjH41yeqJg", length: 29, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/1QjH41yeqJg/default.jpg"},
  {speaker_id: 7, topic_id: 6, language_id: 1, code: "qYdBIuLpBNE", length: 117, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/qYdBIuLpBNE/default.jpg"},
  {speaker_id: 8, topic_id: 7, language_id: 1, code: "R8RyibHbDSg", length: 52, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/R8RyibHbDSg/default.jpg"},
  {speaker_id: 9, topic_id: 8, language_id: 1, code: "sycENPAeWAU", length: 95, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/sycENPAeWAU/default.jpg"},
  {speaker_id: 10, topic_id: 8, language_id: 1, code: "clpOP8f3Jc8", length: 48, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/clpOP8f3Jc8/default.jpg"},
  {speaker_id: 10, topic_id: 9, language_id: 1, code: "2Pb6ZqQY4Lc", length: 38, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/2Pb6ZqQY4Lc/default.jpg"},
  {speaker_id: 4, topic_id: 10, language_id: 1, code: "7Nw1brdR0EI", length: 36, category_id: 3, thumbnail_url: "http://i1.ytimg.com/vi/7Nw1brdR0EI/default.jpg"}
])
VideoScript.create!([
  {video_id: 1, language_id: 1, content: "はい、仮に私がクライアントのネイティブのランゲージを話せる、話すことができるとしましたら、恐らく私はそのランゲージを使って彼とビジネスをすると思います。ですけれども、それはビジネスとシチュエーションによって少しやはり変わるかなと思います。というのは、クライアントと私が一対一で仕事をする場合には、恐らくクライアントのネイティブのランゲージを私が喋るほうが、仕事がスムーズに進むのではないかと思います。それに、そのほうが、まあクライアント側にとっても、何と言いましょうか、非常に話が運びやすいと言いますか、そういう面もあると思います。ですから、ビジネスに非常に有利に運ぶとは思います。ですけれども、たいていの場合、仕事は一人でクライアントと接するのではなくて、チームで接するとか、組織ぐるみでそのクライアントと接する機会が多いと思いますので、恐らくビジネスのシーンでは、そういった場合、共通語は、共用語は英語ではないかな思いますので、恐らくそういうシーンでは、私は英語を用いると思います。もちろん個人的にそのクライアントと接する場合には、そのランゲージを有効に活用することが非常によろしいのではないかと思います。", original: true},
  {video_id: 1, language_id: 2, content: "Yes, well, if I can, if I can speak my client's native language, I think I would use that language to do business with him. However, I think this will change a bit depending on the business situations. I say this because in cases where my client and I do business one on one, I think that business will probably go smoothly if I speak in my client's language. Additionally, that way, how can I say it, I think that there is an aspect where this type of business talk will go easier for the client too. So, I think that business will go very favorably. Yet, in most cases, there are more times when I deal with my client as a team or as a group, not by myself alone. In those cases, in a business situation, the common language or the standard language is probably English, so I will probably use English. Of course, in cases where you are with your client in private, I think that it is very good to use his native language effectively.", original: false},
  {video_id: 2, language_id: 1, content: "えっと、贈り物をいただくのは、いただける時というか、あのう、相手がもう用意してくださった場合には、どんな場合でも受け取っていいかと思うんですけども、その時に大事なのは、やっぱりお返しに最低でもお礼状を、お礼のお手紙を書くということが大事だと思います。そのいただいた物が高額の場合で個人的な場合、例えば会社とかその団体にきた場合ではなくて個人的にきた場合というのは、「お返し返し」っていうことをすることも、物でお返しを返すっていうこともありますけれども、そういうことはまれなので、基本的には受け取ってお礼状を書くとか、もしくはお礼の電話を入れるということすれば、基本的にはいただいていいと思います。", original: true},
  {video_id: 2, language_id: 2, content: "Well, receiving a gift, I would say when we receive a gift, well, when the person has already prepared a gift, then I think you can receive it at any occasion. The important thing is to at least write a thank-you letter. I think that writing a letter of thanks is important. When the gift is an expensive thing and has been given to an individual, not to an organization, we may give back a gift in return. We return the person something as 'return-return,' but such a case isn't as common. As long as we write a thank-you letter or make a thank-you phone call after receiving a gift, I think we can receive a gift.", original: false},
  {video_id: 3, language_id: 1, content: "えっと、日本では、えっと話の焦点がそれて、主題からそれて、別の話が入り込むということは、まあアメリカでの場合と同様によくあることだと思います。その場合に、もとの主題に戻そうとすることはそんなに問題ではないと考えます。但し、その戻し方ということに関して非常に重要な面がありまして、ストレートに「もとの話に戻しましょう」といったような言い方はあまりしないと思います。その会話の中でうまく誘導してもとに戻していくということを常に誰かが考えていながら交渉している場面というのがよくあると思います", original: true},
  {video_id: 3, language_id: 2, content: "I think that it is common, uhh, in Japan and—well, in America too—for off-the-subject topics to enter into a discussion. In those situations, I believe that it’s not much of a problem to get back to the topic. But, how you get back on topic is an extremely important point. I think that people don’t often say, in a straight-forward manner, ‘let’s return to the discussion’. There are many times while negotiating when someone is always thinking about returning to the topic by leading the conversation well.", original: false},
  {video_id: 4, language_id: 1, content: "オフィスの大きさとか位置によるその違い、っていうことですけれども、例えばですね、私の経験の中では、日本のオフィスは、同僚の間の席の位置がですね、向かい合わせの、もっとオープンなかんじのところで、向かい合わせの椅子とか机の並びがありまして、片方のはしっこの方に、例えば、課の課長が座りますけれども、その課長御自身、その課長自身も、まあオープンな同じような席をとっていて、別なオフィスとかないんですね。で、アメリカの方で勤めた場合、そういうオープンなかんじではなく、まあこっちでいういわゆるキュービクルで、結構高い壁の席がありまして、で、完全にもう分けてますね。ですから挨拶もあんまりないし、いつ人が来たり帰ったりするその様子もわからないぐらいのパーティションがありまして、非常に違う環境、ちょっと一般的に違うと思いますけれども。", original: true},
  {video_id: 4, language_id: 2, content: "Well, in my experience, Japanese offices are a shared space where colleagues sit facing each other. The desks and chairs face in a more open-spaced area. The section manager, for example, sits at the very end of one side. The manager himself sits in a seat in the same open space, he does not have a separate office. If you work in the U.S., the office is not open like that. It has so-called cubicles, and there are seats surrounded by high walls. It is completely divided. Therefore, people do not greet each other very much, and there are partitions that extend where they do not even notice when people come and go. It's a very different environment. I believe that it is generally different.", original: false},
  {video_id: 5, language_id: 1, content: "ええ、まあ名刺の肩書きと同様にですね、オフィスの大きさ、場所ってのはその人の顔とも言えると思います。で、日本では一般的に地位が上がるにつれて、より良い場所に、また大きなオフィスが与えられるのが通常です。役員になれば専用の個室と専属の秘書が与えられます。", original: true},
  {video_id: 5, language_id: 2, content: "Uh, well I think it can be said that the title on one’s business card, just like the size and location of one’s office, tell who a person is. And, in Japan, in general, as one’s advances in position, one moves to a better location and ordinarily gets a bigger office. When one becomes an executive, one can get exclusive use of a private room and one’s own secretary.", original: false},
  {video_id: 6, language_id: 1, content: "日本で、コネクションが重要か、能力が重要かというのは、やはり難しい問題です。ただ、シンプルに考えると、コネクションというのも能力の一つであると考えている人が多いのではないかと思います。あなたがきちんとした仕事をきちんとした時間にできない人であれば、それは、あなたはビジネスの世界でやっていく資格がないということだと思うので、そういう意味において、能力というのは最低限必要です。但し、あなたがその能力を生かして、どんどん培っていく人間関係というもの、これを私はコネクションだと考えていますが、それをきちんと築きあげて維持していく能力がないということも、やはり日本人の中では、あまり出世できない要素になるんではない、なると思います。というのはですね、やはり仕事というのは、仕事一回限りの付き合いというのではなくて、継続的にやっていく面というのもあると思いますから、その中で、一度破壊された人間関係であるとか、一度疎遠になった人間関係というのを、もう一度、そのたびごとに復活させるというのはどうも、少なくとも日本では、非合理的であると考えられていると思いますので、きちんとした人間関係を、長い間維持していく能力というのが大事なのではない、あると思います。今までのは一般的な話で、やや例外のある業界というのもありまして、例えば、広告業界とかは、日本ではかなりコネクションが重要な業界であるというふうに考えられていますので、この業界だけは特別なんですけれども、割と就職の際にもコネクションが重要になってきます。それ以外の業界は、割とあなたの能力で、少なくとも就職レベルでは、判断をしていると思います。", original: true},
  {video_id: 6, language_id: 2, content: "Which is more important, connections or abilities? You'll see that this is a difficult question in Japan. If you think about it, there are many who think that connection is one of your abilities. If you are a person who cannot do your work properly or in time, I think it means that you have no capacity for working in a business world. In that sense, ability is a necessary minimum. However, if you cannot utilize your ability, the human relationships that you are increasingly making, which I think are connections, if you cannot properly build them up and have no capability to maintain them, among Japanese I believe it will be the factor in not getting promoted. That is because, I believe work is not done on a one-time-only association, but rather it also has a continuous aspect. In that respect, in Japan at least, it is unpractical to have to continually revive a relationship that has been destroyed or estranged. So, I think that the ability to maintain a proper long-term relationship is important. This however is just in general terms and depends on different industries. For example, in Japan it is thought that the advertising industry is one in which connections are crucial. This industry is unique, and when you are getting a job, connections will become fairly important. In other industries, you will be judged by your abilities, at least when you are in the phase of looking for a job.", original: false},
  {video_id: 7, language_id: 1, content: "えっと、この点に関して、最近日本では非常に変化があると思います。というのは、女性が非常に進出してきて、そして高い、女性の重役もたくさん出てきています。そして、その女性たちが非常に才能を持っている女性であるならば、男性は、私は、尊敬の念を持って、接するこ、接すると思いますけれども、もし、その女性がそのような特別な才能がなければ、やはり、その女性と男性というのは、対等に扱われるというのは、少し難しい時があるかもしれません。で、まず、私が若かった時代には、女性が重役になるということは、非常に困難なことでした。ほとんどあまり、まあ、見られないと言っても過言ではありませんでした。", original: true},
  {video_id: 7, language_id: 2, content: "In this respect, I think recently there have been major changes where women have advanced. A lot of women executives are appearing. And if these women are highly talented women, then I think men will treat them with respect. If the woman do not have a special talent, then there might be a some difficult times in which a woman and man would be treated equally. When I was young, it was an extremely difficult thing for a woman to become an executive. It is not an exaggeration to say that (female executives) were hardly seen.", original: false},
  {video_id: 8, language_id: 1, content: "ええ、今の日本では転職するということに関しましては、そう驚きではなくなってはおります。ですけれども、日本の会社というのはおもしろい制度で、退職金の制度とそれから年功序列という二つのおもしろい仕組みがあります。で、その二つの仕組みに縛られて、会社をなかなか変われないというのが今までの日本でした。人々が一つの会社に長くいればいるほどたくさんの退職金をもらえるとか、長くいればいるほど自然に昇級していくという仕組みが今までの日本にありましたが、最近は社会もいろいろ変化しておりますので、そういう、そういったことがいろいろ会社の中でも変化しつつあります。そこで例えば、退職金制度であれば、４０１Kというものをアメリカから導入しておりまして、退職金のポータビリティを持たせるなどして、会社に社員が縛られないような仕組みが日本の中でもできつつあります。これで社員は、自分で見つけたよりよい仕事に対して、自分を、会社を変われるというような制度作りも、日本の中では今行われております。現に私のプロジェクトの中にも、会社を辞めてこのプロジェクトのために会社を変わられたというかたもたくさんおられます。ですから、今の日本ではそう珍しいことではないと思います。", original: true},
  {video_id: 8, language_id: 2, content: "Yes, nowadays in Japan, regarding the changing of jobs, it is not such a surprising thing anymore. However, in Japanese companies there are interesting systems, two interesting structures that are called The Retirement Fund System and The Seniority System. And, up to now, it was almost impossible to change jobs in Japan because employees were bound by these two systems. In Japan, until recently there had been structures where the longer the people stayed at one company, the more retirement fund they would receive, where the longer the people stayed, the higher they would be automatically promoted, and so on. Yet, because the society has been changing in many ways lately, such things are also changing in the companies. So, for example, if it is a retirement fund, the 401K was introduced from the U.S., and by giving the retirement fund portability, a new structure is in the process of being established where employees are not bound by their company. By this, the employee himself, well, as to a job that he has found himself, there is a new system being created where he can change his job in Japan. In fact, among the people working on my project, there are many who quit their old jobs and changed their jobs for this project. So, it is not so unusual in Japan presently.", original: false},
  {video_id: 9, language_id: 1, content: "状況にもよりますけれども、日本社会では転職をマイナスにとらえる傾向っていうのが、まだ残っていると思います。会社を退職する際も、会社に対してネガティブにとらえられるような理由付けっていうのは、行いません。それで、極力、円満退社を心がけます。一つの会社に一生勤めるいわゆる終身雇用制の影響がまだあるあるからだと思います。但し，昨今の会社文化っていうのは、大きな、あのう、大きく変わってきていますので、もちろん、ベストな選択として転職することも多くなっていますし、そういう転職が好意的なものとして受け入れらるようになってきているということも事実です。", original: true},
  {video_id: 9, language_id: 2, content: "Depending on the situation, I believe that the idea of changing jobs in Japanese society is still negative. When quitting the company, we do not give reasons that could be taken as negative by the company. Therefore, we are inclined to quit the company in as amicable a manner as possible. I think this is because there is still the influence of a so-called life-time employment system, where one works for one company all his/her life time. However, because the office culture has been changing greatly these days, it is also a fact that changing jobs have been increasing and that changing jobs like that has been thought of favorably.", original: false},
  {video_id: 10, language_id: 1, content: "日本ではチーム・ワークを非常に重視する傾向があります。よく言われることですが、文化的に「和」を重んじ、チームの中でコンセンサスを取ることをよしとします。会社では、これもよく言われることですけれども、仕事を進める上で「根回し」を行います。重要な案件については、会社で決済を受ける以前に、関係部署の了解を得ます。関係者へ必要な情報をあらかじめ伝えておくということは非常に重要で、逆の言い方をすれば、こういう情報を関係者に与えておかないということは、大きなミスであると考えられます。", original: true},
  {video_id: 10, language_id: 2, content: "In Japan, team work tends to be greatly emphasized. It is often said that culturally, 'harmony' is valued and getting a consensus is considered a good thing. It is often said that in at company we practice 'groundwork' in order to progress with a project. As related to an important issue, before making a decision at the company, we get consensus among the related units. Sharing the necessary information with related parties in advance is extremely important. On the other hand, it is considered to be a huge mistake to not provide information like that to related parties beforehand.", original: false},
  {video_id: 11, language_id: 1, content: "ええ、日本では、基本的にはアメリカでの契約社会同様、契約書は必ず作る文化だと思います。但し、その契約書に書かれている内容でも基本的には合意をもって、中身と書かれていることが違うことを、まあ、会話の中で「ネゴ」と言いますが、あのう、交渉の中でよしとする場面が多々あります。そのへんは、厳密なアメリカでのビジネスの文化とは全く異なる部分だ思います。", original: true},
  {video_id: 11, language_id: 2, content: "Basically, in Japan, we definitely write contracts just like the ‘litigious’ American society. Yet, in general, there are many times when we come to terms with the written content of a contract as long as we agree in conversation during negotiations, even if the contents may differ from what is written. In that respect I think that this is different from the strict American business culture.", original: false}
])
