import React from "react";
import pro1 from "../assets/1108 Flash light.jpg"
import pro2 from "../assets/1201 ពិលឆក់.jpg"
import pro3 from "../assets/binoculars.jpg"
import pro4 from "../assets/Code 288.jpg";
import pro5 from "../assets/Code 910A.jpg";
import pro6 from "../assets/Code 928.jpg";
import pro7 from "../assets/Code 1108.jpg";
import pro8 from "../assets/Code 1188.jpg";
import pro9 from "../assets/Code 1201.jpg";
import pro10 from "../assets/Code HY_X10.jpg";
import pro11 from "../assets/Code P50 Smilig shark.jpg";
import pro12 from "../assets/Code P70.jpg";
import pro13 from "../assets/Code W591.jpg";
import pro14 from "../assets/Code X8.jpg";
import pro15 from "../assets/FBQ2002-A 80KV.jpg";
import pro16 from "../assets/HY-X10.jpg";
import pro17 from "../assets/Laser 303 Green.jpg";
import pro18 from "../assets/laser 3003.jpg";
import pro19 from "../assets/Laser ឆេះ ខ្នាតធំ.jpg";
import pro21 from "../assets/Spray ម្ទេស.jpg";
import pro20 from "../assets/T6 ប្រភេទថ្ម2កូន.jpg";
import pro22 from "../assets/USB CHANG.jpg";
import pro23 from "../assets/W591 Flash light new.jpg";
import pro24 from "../assets/W591-1.jpg";
import pro25 from "../assets/ការេមឆក់.jpg";
import pro26 from "../assets/ដំបងរលាស់.jpg";
import pro27 from "../assets/ពិល 10មុខងារ.jpg";
import pro28 from "../assets/ពិលបន្តោងសោឆក់.jpg";
import pro29 from "../assets/ស្គែនអាវុធ ឬជាតិដែក.jpg";
import pro30 from "../assets/ឡាស៊ែរបញ្ចាំងឆេះ.jpg";
import pro31 from "../assets/YD-899T.jpg";

const Data = [
    {
        id: 1,
        name: "ពិលភ្លឺខ្លាំង Code: W591",
        price: 33,
        image: pro13,
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 2,
        name: "ពិលឆក់ Code: 1201",
        price: 23,
        image: pro2,
        images: [pro2, pro2, pro2],
        description: "ពិលឆក់នេះមានការរចនាស្អាតបែបស្តង់ដានិងអាចការពារខ្លួនបានទៀតផង។",
        category: "ពិលឆក់"
    },
    {
        id: 3,
        name: "កែវយឺតមើលបានឆ្ងាយ",
        price: 35,
        image: pro3,
        description: "កែវយឺត​​​ មាន៣ប្រភេទ៖ កែវយឺតខ្នាតធ៉ តម្លៃ 42$, កែវយឺតខ្នាតកណ្ដាល តម្លៃ 35$ និងកែវយឺតខ្នាតតូច​ តម្លៃ 28$ កែវយឺតមើលឆ្ងាយមានសមត្ថភាពបង្ហាញរូបភាពយ៉ាងច្បាស់។ វាអាចប្រើប្រាស់បានសម្រាប់ការសិក្សា និងការស្វែងយល់អំពីធាតុដែលនៅឆ្ងាយ។",
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 4,
        name: "ពិលឆក់ 3មុខងារ Code: 288",
        price: 16,
        image: pro4,
        category: "ពិលឆក់"
    },
    {
        id: 5,
        name: "ពិលឆក់ Code: 910A",
        price: 15,
        image: pro5,
        category: "ពិលឆក់"
    },
    {
        id: 6,
        name: "ពិលឆក់ Code: 928",
        price: 16,
        image: pro6,
        category: "ពិលឆក់"
    },
    {
        id: 7,
        name: "ពិលឆក់ Code: 1108",
        price: 23,
        image: pro7,
        category: "ពិលឆក់"
    },
    {
        id: 8,
        name: "ពិលឆក់ Code: 1188",
        price: 26,
        image: pro8,
        category: "ពិលឆក់"
    },
    {
        id: 9,
        name: "ពិលឆក់ Code: 1201",
        price: 23,
        image: pro9,
        category: "ពិលឆក់"
    },
    {
        id: 10,
        name: "ពិលឆក់ Code: HY_X10",
        price: 25,
        image: pro10,
        category: "ពិលឆក់"
    },
    {
        id: 11,
        name: "Code: P50 Smilig shark",
        price: 19,
        image: pro11,
        description: "ពិលភ្លឺខ្លាំង​ P50 Smiling shark មាន 2​ ប្រភេទ​៖ ពិលភ្លឺខ្លាំងល្អ តម្លៃ 25$ និងពិលភ្លឺខ្លាំងធម្មតា តម្លៃ 19$។ ពិលភ្លឺខ្លាំងនេះមានការរចនាដែលអាចបំភ្លឺបានយ៉ាងច្បាស់។ វាអាចប្រើប្រាស់បានសម្រាប់ការប្រមូលផ្តុំ និងការបង្ហាញពិធីជប់លៀង។",
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 12,
        name: "ពិលភ្លឺខ្លាំង Code: P70",
        price: 38,
        image: pro12,
        description: "ពិលភ្លឺខ្លាំង​ P50 Smiling shark មាន 2​ ប្រភេទ​៖ ពិលភ្លឺខ្លាំងល្អ តម្លៃ 38$ និងពិលភ្លឺខ្លាំងធម្មតា តម្លៃ 32$។ ពិលភ្លឺខ្លាំងនេះមានការរចនាដែលអាចបំភ្លឺបានយ៉ាងច្បាស់។ វាអាចប្រើប្រាស់បានសម្រាប់ការប្រមូលផ្តុំ និងការបង្ហាញពិធីជប់លៀង។",
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 13,
        name: "ពិលឆក់ Code: 1108",
        price: 23,
        image: pro1,
        images: [pro1, pro1, pro1],
        description: "ពិលភ្លឺខ្លាំងនេះមានការរចនាដែលអាចបំភ្លឺបានយ៉ាងច្បាស់។ វាអាចប្រើប្រាស់បានសម្រាប់ការប្រមូលផ្តុំ និងការបង្ហាញពិធីជប់លៀង។",
        category: "ពិលឆក់"
    },
    {
        id: 14,
        name: "ពិលឆក់ Code: X8",
        price: 24,
        image: pro14,
        category: "ពិលឆក់"
    },
    {
        id: 15,
        name: "ពិលឆក់ 5ម៉ែត្រ",
        price: 45,
        image: pro15,
        category: "ពិលឆក់"
    },
    {
        id: 16,
        name: "ដំបងឆក់3មុខងារ HY-X10",
        price: 25,
        image: pro16,
        category: "ពិលឆក់"
    },
    {
        id: 17,
        name: "ឡាស៊ែ Code: 303",
        price: 14,
        image: pro17,
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 18,
        name: "ឡាស៊ែ Code: 303",
        price: 14,
        image: pro18,
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 19,
        name: "ឡាស៊ែបាញ់ឆេះ ខ្នាតធំ",
        price: 47,
        image: pro19,
        category: "ពិលឆក់"
    },
    {
        id: 20,
        name: "ស្ព្រៃម្ទេស",
        price: 13,
        image: pro21,
        description: "ស្ព្រៃម្ទេសមាន 2​ ប្រភេទ៖ ស្ព្រៃម្ទេស310ml តម្លៃ 13$ និងស្ព្រៃម្ទេស60ml តម្លៃ 10$។ ស្ព្រៃម្ទេសនេះអាចប្រើប្រាស់បានសម្រាប់ការបញ្ចេញក្លិនឬការប្រើប្រាស់ក្នុងការពារការវាយប្រហារ។",
        category: "ពិលឆក់"
    },

    {
        id: 21,
        name: "ពិលឆក់ T6 ប្រភេទថ្ម2កូន",
        price: 16,
        image: pro20,
        category: "ពិលឆក់"
    },
    {
        id: 22,
        name: "កូនពិល ZOOM បាន",
        price: 8,
        image: pro22,
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 23,
        name: "ពិលភ្លឺខ្លាំង Code: W591",
        price: 33,
        image: pro23,
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 24,
        name: "ពិលភ្លឺខ្លាំង Code: W591",
        price: 33,
        image: pro24,
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 25,
        name: "ពិលភ្លឺខ្លាំង Code:WD-899T",
        price: 10,
        image: pro31,
        category: "ពិលភ្លឺខ្លាំង"
    },
    {
        id: 26,
        name: "ការរេមឆក់",
        price: 19,
        image: pro25,
        category: "ពិលឆក់"
    },
    {
        id: 27,
        name: "ដំបងរលាស់",
        price: 12,
        image: pro26,
        category: "ដំបងរលាស់"
    },
    {
        id: 28,
        name: "ពិល 10មុខងារ",
        price: 26,
        image: pro27,
        category: "ពិលឆក់"
    },
    {
        id: 29,
        name: "ពិលបន្តោងសោឆក់",
        price: 15,
        image: pro28,
        category: "ពិលឆក់"
    },
    {
        id: 30,
        name: "ស្គែនអាវុធ ឬជាតិដែក",
        price: 28,
        image: pro29,
        category: "ពិលឆក់"
    },
    {
        id: 31,
        name: "ឡាស៊ែរបញ្ចាំងឆេះ",
        price: 47,
        image: pro30,
        category: "ពិលឆក់"
    },
];

export default Data;
