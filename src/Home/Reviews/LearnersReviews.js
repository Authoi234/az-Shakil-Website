import React, { useEffect, useRef, useState } from 'react';
import introImg from '../../assets/peep1.f4841716.svg';

const LearnersReviews = () => {
    const [showAll, setShowAll] = useState(false);
    const [bgColor, setBgColor] = useState("rgb(14,40,80)");
    const [isInView, setIsInView] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const handleScroll = () => {
            const componentTop = componentRef.current.getBoundingClientRect().top;
            const maxScroll = 200;
            const scrollPercent = Math.min(Math.max(1 - componentTop / maxScroll, 0), 1);

            const startColor = [14,40,80];
            const endColor = [ 23, 49, 88  ];

            const currentColor = startColor.map((start, i) =>
                Math.round(start + (endColor[i] - start) * scrollPercent)
            );

            setBgColor(`rgb(${currentColor.join(",")})`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isInView])

    const reviewsData = [
        {
            name: "Raziur Rahman ",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/377769966_2627827387368902_7808097403162578939_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=CKQwNXTx5nEQ7kNvgEmcgD9&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AXIQH87XLN_YQf09P_nTm9Q&oh=00_AYDXcq8Bw5BKWVpsSj5ep4P6WMy_b0Zw5CRXk8GpUWQQ0g&oe=66FB06EC",
            message: `Shakil bhai has expertise in Student Counseling including Visa processing.
             Highly recommended to students who want a reliable individual to work with their Abroad dream.`
        },
        {
            name: "Susmita Roy",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/453399145_3736713146541238_4540274830350350556_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=l_C9lOuYi08Q7kNvgEUzaqJ&_nc_ht=scontent.fdac134-1.fna&_nc_gid=ARnP5Ff20oFSfsA8qqkxPBa&oh=00_AYAho2BsZAUfKbBR9s4lOj054x8eKHCR87ULifVWv1cT_w&oe=66FAD844",
            message: `কানাডায় পড়তে যাওয়ার জন্য নিজে নিজে এপ্লাই করার ডিসিশন নেওয়াটা অনেক চ্যালেঞ্জিং ছিল। কোথায় থেকে শুরু করবো, কিভাবে প্রসেসিং করবো, কিভাবে তথ্য সংগ্রহ করবো সব নিয়ে খুব টেনশনে ছিলাম। তবে এই একা সব করার জার্নিটা অনেক সহজ হয়ে গেছে শাকিল ভাইয়ার জন্য। যখন থেকে ভাইয়ার টেলিগ্রাম গ্রুপে জয়েন করেছি তখন থেকে জার্নিটা আর আমার একার থাকেনি। যখনই যেখানে আটকে গেছি ভাইয়াকে নক দিয়েছি, দিন, রাত, সময় চিন্তা না করেই আর ভাইয়াও বিরক্ত না হয়ে প্রতিনিয়ত আমাকে ইনফরমেশন দিয়ে গেছেন। যেই ইনফরমেশন উনার কাছে ছিলো না সেটাও আমাকে জেনে জানিয়েছেন। কতোটা ডেডিকেশন থাকলে একটা মানুষ বিনা স্বার্থে অপরিচিত মানুষদের জন্য এতোটা করে, অন্যের সাফল্যকে নিজের সাফল্য মনে করে।  গ্রুপটা এখন আর শুধু একটা প্লাটফর্ম না একটা  পরিবার হয়ে গেছে। ভাইয়া আপনার আগামী দিনগুলোর জন্য অনেক শুভকামনা আর আপনার হাত ধরে আরও অনেক মানুষের বিদেশে পড়তে যাওয়ার স্বপ্ন সফল হোক। ✌️✌️🙂🙂 অনেক ভালো থাকুন। ইশ্বর আপনার মঙ্গল করুন। 😊 ধন্যবাদ ভাইয়া।`
        },
        {
            name: "Musafir Neloy",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/457495721_3873646869530945_5629621023715994959_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=B0PKl3qtv4AQ7kNvgFmSzCG&_nc_ht=scontent.fdac134-1.fna&oh=00_AYCi2R63r6hWG6s9oNOZUcBASlohGrJdlWrFES3WSIuj1w&oe=66FB01CB",
            message: `AZ Shakil vai thank you for giving me your valuable time. You are a very helpful and humble person. You already did a lot for us.
                    May Allah bless you ❤️`
        },
        {
            name: "Fahadul Islam Niloy",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/294435777_105123658954757_1008487508875907000_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=G8F3E99OyQYQ7kNvgFJwjaC&_nc_ht=scontent.fdac134-1.fna&_nc_gid=A88XZUSNs55Jq-lYJ-I_xG7&oh=00_AYBFA1LH83ma5kWwSyluIRtVCNytV7tTRJlBTybqidJssg&oe=66FB053C",
            message: `Asslamulaikum .In my hometown, i visited different types of agencies who are working higer study permit visa but undoubtedly AZ Shakil vaiya is fascinating person.Actually ,the others agencies worried my Academic result.They said i didn't apply overseas countries for my higer study. But, Shakil vaiya ensure that i can apply this result. Alothough he is very polite and humble person.When i faced any dificulty in my  profile assessment i asked him and  the respond so quickly.That's the reason i always love him❤️.I think we should all are appreciates his work. He gives us lot's of information now we are pray for him.Best of luck vaiya.`
        },
        {
            name: "(Kim V)ۦ ۦ  ",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/391661929_862262098610373_6227395856520867745_n.jpg?stp=c30.0.785.785a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=261phGXUUGUQ7kNvgEa_e2u&_nc_ht=scontent.fdac134-1.fna&oh=00_AYAs57GiOx1ZuIUuZ0ZF1zjBoqyflyMnCZpAabkMukxzSw&oe=66FAED8F",
            message: `Shakil vaiya you are so helpful..Thank you vaiya...jokon e kno dorkar e msg disi shate shate response paise..aijonno thank you so much and also thanks jaber vaiya�`
        },
        {
            name: "Yasin Arafat Evan ",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/454237565_1210681596631192_2116777744654062341_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-dAmIP8SxUsQ7kNvgG00PgK&_nc_ht=scontent.fdac134-1.fna&oh=00_AYAW5kxIx1ts27WdLk1-xxclge9igo2edRApUz5qhYof2w&oe=66FAF68C",
            message: `শাকিল ভাইয়া😍।
মানুষটা যে কত্তো হেল্পফুল, তা বলার বাহিরে। আমার মতো এভ্রোডে পড়ার স্বপ্ন দেখা শত শত ছাত্রকে যে নিঃস্বার্থভাবে হেল্প করে যাচ্ছে, তা কয়জনই বা করছে। পরিচয়টা বেশি সময়ের না হলেও, ওনি যেভাবে হেল্প করেছে সারাজিবন কৃতজ্ঞ থাকবো। শুরুটা হয় টেলিগ্রামে, আস্তে আস্তে ভাইয়ার ব্যাপারে জানা, ক্যানাডার ব্যাপারে ইনফ্লুয়েন্জ হওয়া। ধীরে ধীরে নিজের ফাইল গুছিয়েছি। SOP, Fund Explanation দেখে ভাইয়ার গ্রিন সিংগনেলের পরই ফাইল সাবমিট করি। শেষমেশ সেই কাঙ্ক্ষিত সোনার হরিণ হাতের কাছে ধরা দেয়।  😄 সময়ে, অসময়ে সবসময় পাশে ছিলেন, আশা করি সামনেও পাবো ভাইয়াকে।  ধন্যবাদ ভাইয়া♥।৷ ভালোবাসা রইলো খুব♥`
        },
        {
            name: "Md. Omar",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/321503079_1191800118406416_7288203230001913355_n.jpg?stp=c593.465.1000.1000a_dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=5oUOm1rQGisQ7kNvgG3rB16&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AudYHpRkwZ_TNEjCX1nATye&oh=00_AYBu45_Yk6L0j_xpC4duu3ofSft70InDi1rz1toJ9NF4Mw&oe=66FAFD3B",
            message: `Gathered very helpful information meeting with AZ Shakil Vai. Resolved the bottlenecks I have in my profile🤝 I am really grateful to him. Don't know if any other could do that much for me at free cost😍 Highly appreciated and recommended🤩`
        },
        {
            name: "Faysal Ibna Rahman Labib",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/448352160_1614256792750188_6163357004627792045_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=GgXj8ptFZdIQ7kNvgFWQea3&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AE8lCrN2kOulXkmsWCwKgtK&oh=00_AYA7cPJbHi6NYV_nJwQNIoGcPpJ9T_AvOZR-KrQeVAJFIA&oe=66FAE215",
            message: `Assalamu Alaikum.If there is any problem then contact Az Shakil vaiya.In sh Allah the problem will be solved.Thank you very much brother for showing me a beautiful way💟`
        },
        {
            name: "Jahedul Islam",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/460140106_2523146424548505_7143580521266798254_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pbzM8Y1JxBYQ7kNvgFHdF7E&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AjCxg2Kvti_jS0667upUrBK&oh=00_AYBRgcIb8HlnOlsUuGx2-kRSy69WTfqHTJCY2gkOsVR9dA&oe=66FAEED7",
            message: `Assalamualaikum. Thanks for your time and suggestions. You're very helpful and humble person brother ❤️`
        },
        {
            name: "Mirazul Islam",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/307573963_104928555709874_1791434819519151785_n.jpg?stp=c0.0.460.460a_dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=uBnbHVOJJnYQ7kNvgFCzYBo&_nc_ht=scontent.fdac134-1.fna&oh=00_AYBsDe4CSRnepg4jHzNCnd-Aa1Il0uShQNaaUAK0vfz5_w&oe=66FAFBAF",
            message: `Thanks vai,, for giving me your valuable time �`
        },
        {
            name: "Sohidul Sojib ",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/458919344_1051687263329707_9135577133254728801_n.jpg?stp=c0.0.1476.1476a_dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=Yst6umLrvioQ7kNvgGiS-Ou&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AyHxLfdCoUx_hnYMAOMcLMn&oh=00_AYCepR7oPnf0iI23CUfE7ifoq7LAd6aJIpON30aRh1_UoQ&oe=66FB01BB",
            message: `onek important suggestion diye help korchen vai, onek kichui jantam na asa kori apnar suggestion gula kaje dibe thank you so much vai ❤️❤️`
        },
        {
            name: "Md Mahedi Hasan Shaikat",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/460627020_2193363781036342_7820301293340354075_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=YyJgRXCWhQAQ7kNvgHRFo3W&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AbwUvqjfc5nVpTHQjFyFsZu&oh=00_AYAtxVJqi-wnrHTpLn1w7yP_oEdzYQMneKBTTlT82-ANnA&oe=66FAE4F6",
            message: `Thanks Shakil bhai for your consultancy �`
        },
        {
            name: "Shaheduzzaman Tashin",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/454518327_2239239803086705_8096049870261414621_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=YmbGY08WB_EQ7kNvgEjWNRg&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AdAcdx7W8nWmEM11mBdV6SZ&oh=00_AYC7XmOhReNORdYNUZ_keXdSUJF1Mh2Z7b6s10QVwaix2g&oe=66FB417F",
            message: `Such a nice person❤️
            He did my free profile assessment so fast.
            He always tries to give valuable information and hope to get more help from you in future.`
        },
        {
            name: "Mehedi Hasan Mun",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/441516402_3784127168572947_4566088692120987457_n.jpg?stp=c0.0.1583.1583a_dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=ydcDf1yEn7gQ7kNvgFCfvoz&_nc_ht=scontent.fdac134-1.fna&_nc_gid=ADneZ5Z1TX6mA8nL_6PGy_6&oh=00_AYDpSQ25Zp_3J0AYjphomv-FmoPufhYAwE54kl4gONrpGQ&oe=66FB2789",
            message: `AZ Shakil bhaiya is the humblest person I have ever seen! I just knocked him to see if he gonna reply me or not. Without few minutes he replied & I asked my queries through vc. Hearing my problem, he told me to call him. After that, I talked with him almost one hour & introduced with a humbled helping hand. We talked long, he gave me lot of advice about my career & shared his experience too. He has a good intend to help others, highly recommended for all kind of career & educational advised. Best wishes for Shakil bhaiya.❣️`
        },
        {
            name: "Abdul Aziz Shakib  (سكيب)",
            pic: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/449751611_1179684653274263_9006549160385971968_n.jpg?stp=c2.1.198.198a_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=8oBohZLYHM8Q7kNvgGBlHdY&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AAYBtbMV-jY3NC9nhIeCGsR&oh=00_AYAIm_edJoUY2wQZGGRLqtSC_KD2xZwWVvoWw0TSQSSwZg&oe=66FB2B3C",
            message: `Saying from the core of my heart, he is such a nice person and so so so dedicated on helping others who is trying to immigrate to not only Canada but any other country in the world! Even while he is busy in his works, even while he is in the street (you can hear car horns and stuffs), he will still find time for you and try his best to give you the most informative answer you can possibly imagine. And yeah, all that work from him comes at zero charges.. Literally, he does all that for free!! Wish, there were more 'Shakil' bhai in this world 🙂`
        },
    ];


    const visibleReviews = showAll ? reviewsData : reviewsData.slice(0, 7);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <div className='px-5 md:px-20 py-12' ref={componentRef} style={{
            backgroundColor: bgColor,
            transition: 'background-color 0.5s ease-in'
        }}>
            <div className="bg-[#0f172a] pt-5 px-3 md:px-16 text-center">
                <div>
                    <div className="flex justify-center items-center" data-aos="fade-up">
                        <div className="w-40">
                            <img src={introImg} alt="" />
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold text-white'><span className='text-[#36b7f0]'>লার্নাররা</span> আমাদের সম্পর্কে যা ভাবেন</h1>
                    <p className='text-md font-semibold text-[#8f9eb3]'>সর্বদাই এপরেন্ট এর প্রতি তাদের ভালবাসা প্রকাশ করেছেন</p>
                </div>
                <div className='mt-5 columns-1 md:columns-2 lg:columns-3 flex-wrap gap-10'>
                    {visibleReviews.map((data, index) => (
                        <div key={index} className="bg-[#182234] px-2 text-white rounded-3xl my-10 py-3 break-inside-avoid" data-aos="zoom-in">
                            <div className='flex justify-center items-start'>
                                <div className='w-1/4 text-center flex justify-center items-center'>
                                    <div className='w-12 h-12 rounded-full border border-white'>
                                        <div className='w-full'>
                                            <img src={data.pic} className='rounded-full object-cover' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-3/4'>
                                    <div className=' text-left w-full'>
                                        <h4 className="text-lg">{data.name}</h4>
                                        <p className="text-gray-300 text-sm">Review on Facebook</p>
                                        <p className='text-white text-sm mt-2 mb-2'>{data.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAll && (
                    <div className="absolute inset-x-0 -m-52 h-52 mx-5 md:mx-20"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 1) 100%)'
                        }}>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <button
                                className="cursor-pointer relative bg-[#1e6deb] text-white text-base px-4 border-0 rounded-full transition ease-in-out py-2 hover:bg-[#3288ff] hover:scale-110"
                                onClick={handleToggle}
                            >
                                {!showAll && 'আরো কমেন্ট দেখুন'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LearnersReviews;