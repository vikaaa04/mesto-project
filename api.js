{\rtf1\ansi\ansicpg1251\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPS-BoldMT;\f1\fmodern\fcharset0 CourierNewPSMT;}
{\colortbl;\red255\green255\blue255;\red107\green0\blue67;\red255\green255\blue255;\red0\green0\blue0;
\red14\green110\blue109;\red29\green0\blue255;\red107\green0\blue67;\red14\green110\blue109;\red29\green0\blue255;
}
{\*\expandedcolortbl;;\cssrgb\c50196\c1961\c33333;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c16471\c0\c100000;\cssrgb\c50196\c1961\c33333;\cssrgb\c0\c50196\c50196;\cssrgb\c16471\c0\c100000;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
const
\f1\b0 \cf0  myHeaders = 
\f0\b \cf2 new
\f1\b0 \cf0  \cf5 Headers\cf0 ();\cb1 \
\cb3 myHeaders.append(\cf6 "authorization"\cf0 , \cf6 "\'95\'95\'95\'95\'95\'95"\cf0 );\cb1 \
\
functionMe()\{\

\f0\b \cf2 \cb3 const
\f1\b0 \cf0  requestOptions = \{\cb1 \
\cb3   method: \cf6 "GET"\cf0 ,\cb1 \
\cb3   headers: myHeaders,\cb1 \
\cb3   redirect: \cf6 "follow"\cf0 \cb1 \
\cb3 \};\cb1 \
\
\cb3 fetch(\cf6 "https://nomoreparties.co/v1/apf-cohort-202/users/me"\cf0 , requestOptions)\cb1 \
\cb3   .then((response) => response.text())\cb1 \
\cb3   .then((result) => console.log(result))\cb1 \
\cb3   .
\f0\b \cf2 catch
\f1\b0 \cf0 ((error) => console.error(error));\cb1 \
\}\
\
\
\
\
\pard\pardeftab720\partightenfactor0

\f0\b \cf7 \cb3 \outl0\strokewidth0 \strokec7 const
\f1\b0 \cf0 \strokec4  myHeaders = 
\f0\b \cf7 \strokec7 new
\f1\b0 \cf0 \strokec4  \cf8 \strokec8 Headers\cf0 \strokec4 ();\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 myHeaders.append(\cf9 \strokec9 "authorization"\cf0 \strokec4 , \cf9 \strokec9 "\'95\'95\'95\'95\'95\'95"\cf0 \strokec4 );\cb1 \
\
\
functionCards()\{\
\pard\pardeftab720\partightenfactor0

\f0\b \cf7 \cb3 \strokec7 const
\f1\b0 \cf0 \strokec4  requestOptions = \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   method: \cf9 \strokec9 "GET"\cf0 \strokec4 ,\cb1 \
\cb3   headers: myHeaders,\cb1 \
\cb3   redirect: \cf9 \strokec9 "follow"\cf0 \cb1 \strokec4 \
\cb3 \};\cb1 \
\
\cb3 fetch(\cf9 \strokec9 "https://nomoreparties.co/v1/apf-cohort-202/cards"\cf0 \strokec4 , requestOptions)\cb1 \
\cb3   .then((response) => response.text())\cb1 \
\cb3   .then((result) => console.log(result))\cb1 \
\cb3   .
\f0\b \cf7 \strokec7 catch
\f1\b0 \cf0 \strokec4 ((error) => console.error(error));\
\}\
\
\
\
\
\pard\pardeftab720\partightenfactor0

\f0\b \cf7 \strokec7 const
\f1\b0 \cf0 \strokec4  myHeaders = 
\f0\b \cf7 \strokec7 new
\f1\b0 \cf0 \strokec4  \cf8 \strokec8 Headers\cf0 \strokec4 ();\cb1 \
\cb3 myHeaders.append(\cf9 \strokec9 "Content-Type"\cf0 \strokec4 , \cf9 \strokec9 "application/json"\cf0 \strokec4 );\cb1 \
\cb3 myHeaders.append(\cf9 \strokec9 "authorization"\cf0 \strokec4 , \cf9 \strokec9 "\'95\'95\'95\'95\'95\'95"\cf0 \strokec4 );\cb1 \
\

\f0\b \cf7 \cb3 \strokec7 const
\f1\b0 \cf0 \strokec4  raw = \cf8 \strokec8 JSON\cf0 \strokec4 .stringify(\{\cb1 \
\cb3   \cf9 \strokec9 "name"\cf0 \strokec4 : \cf9 \strokec9 "Vika Biryukova"\cf0 \strokec4 ,\cb1 \
\cb3   \cf9 \strokec9 "about"\cf0 \strokec4 : \cf9 \strokec9 "student wow"\cf0 \cb1 \strokec4 \
\cb3 \});\cb1 \
\
\
functionPatch()\{\

\f0\b \cf7 \cb3 \strokec7 const
\f1\b0 \cf0 \strokec4  requestOptions = \{\cb1 \
\cb3   method: \cf9 \strokec9 "GET"\cf0 \strokec4 ,\cb1 \
\cb3   headers: myHeaders,\cb1 \
\cb3   body: raw,\cb1 \
\cb3   redirect: \cf9 \strokec9 "follow"\cf0 \cb1 \strokec4 \
\cb3 \};\cb1 \
\
\cb3 fetch(\cf9 \strokec9 "https://nomoreparties.co/v1/apf-cohort-202/users/me?Content-Type=application/json"\cf0 \strokec4 , requestOptions)\cb1 \
\cb3   .then((response) => response.text())\cb1 \
\cb3   .then((result) => console.log(result))\cb1 \
\cb3   .
\f0\b \cf7 \strokec7 catch
\f1\b0 \cf0 \strokec4 ((error) => console.error(error));\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \}\
\
\
\
\
\pard\pardeftab720\partightenfactor0

\f0\b \cf7 \cb3 \strokec7 const
\f1\b0 \cf0 \strokec4  myHeaders = 
\f0\b \cf7 \strokec7 new
\f1\b0 \cf0 \strokec4  \cf8 \strokec8 Headers\cf0 \strokec4 ();\cb1 \
\cb3 myHeaders.append(\cf9 \strokec9 "Content-Type"\cf0 \strokec4 , \cf9 \strokec9 "application/json"\cf0 \strokec4 );\cb1 \
\cb3 myHeaders.append(\cf9 \strokec9 "authorization"\cf0 \strokec4 , \cf9 \strokec9 "\'95\'95\'95\'95\'95\'95"\cf0 \strokec4 );\cb1 \
\
\
functionPost()\{\

\f0\b \cf7 \cb3 \strokec7 const
\f1\b0 \cf0 \strokec4  raw = \cf8 \strokec8 JSON\cf0 \strokec4 .stringify(\{\cb1 \
\cb3   \cf9 \strokec9 "likes"\cf0 \strokec4 : [],\cb1 \
\cb3   \cf9 \strokec9 "_id"\cf0 \strokec4 : \cf9 \strokec9 "5d1f0611d321eb4bdcd707dd"\cf0 \strokec4 ,\cb1 \
\cb3   \cf9 \strokec9 "name"\cf0 \strokec4 : \cf9 \strokec9 "\uc0\u1041 \u1072 \u1081 \u1082 \u1072 \u1083 "\cf0 \strokec4 ,\cb1 \
\cb3   \cf9 \strokec9 "link"\cf0 \strokec4 : \cf9 \strokec9 "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"\cf0 \strokec4 ,\cb1 \
\cb3   \cf9 \strokec9 "owner"\cf0 \strokec4 : \{\cb1 \
\cb3     \cf9 \strokec9 "name"\cf0 \strokec4 : \cf9 \strokec9 "Jacques Cousteau"\cf0 \strokec4 ,\cb1 \
\cb3     \cf9 \strokec9 "about"\cf0 \strokec4 : \cf9 \strokec9 "Sailor, researcher"\cf0 \strokec4 ,\cb1 \
\cb3     \cf9 \strokec9 "avatar"\cf0 \strokec4 : \cf9 \strokec9 "https://pictures.s3.yandex.net/frontend-developer/ava.jpg"\cf0 \strokec4 ,\cb1 \
\cb3     \cf9 \strokec9 "_id"\cf0 \strokec4 : \cf9 \strokec9 "ef5f7423f7f5e22bef4ad607"\cf0 \strokec4 ,\cb1 \
\cb3     \cf9 \strokec9 "cohort"\cf0 \strokec4 : \cf9 \strokec9 "local"\cf0 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   \cf9 \strokec9 "createdAt"\cf0 \strokec4 : \cf9 \strokec9 "2019-07-05T08:10:57.741Z"\cf0 \cb1 \strokec4 \
\cb3 \});\cb1 \
\

\f0\b \cf7 \cb3 \strokec7 const
\f1\b0 \cf0 \strokec4  requestOptions = \{\cb1 \
\cb3   method: \cf9 \strokec9 "POST"\cf0 \strokec4 ,\cb1 \
\cb3   headers: myHeaders,\cb1 \
\cb3   body: raw,\cb1 \
\cb3   redirect: \cf9 \strokec9 "follow"\cf0 \cb1 \strokec4 \
\cb3 \};\cb1 \
\
\cb3 fetch(\cf9 \strokec9 "https://nomoreparties.co/v1/apf-cohort-202/cards"\cf0 \strokec4 , requestOptions)\cb1 \
\cb3   .then((response) => response.text())\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \}\
}