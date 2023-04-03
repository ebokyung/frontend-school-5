// json generator
// https://json-generator.com/
// json
let 회원정보 = [
    {
        "_id": "642a61dff2f4eec3508d4cbf",
        "index": 0,
        "age": 29,
        "eyeColor": "brown",
        "name": "Linda Bush",
        "gender": "female",
        "company": "PARCOE"
    },
    {
        "_id": "642a61df3459af185ed50082",
        "index": 1,
        "age": 26,
        "eyeColor": "brown",
        "name": "Faith Mosley",
        "gender": "female",
        "company": "ELECTONIC"
    },
    {
        "_id": "642a61df7501c7162bf32ee0",
        "index": 2,
        "age": 22,
        "eyeColor": "green",
        "name": "Steele Raymond",
        "gender": "male",
        "company": "VINCH"
    },
    {
        "_id": "642a61df795c0af0617cd8a1",
        "index": 3,
        "age": 34,
        "eyeColor": "green",
        "name": "Workman Gomez",
        "gender": "male",
        "company": "ZILLA"
    },
    {
        "_id": "642a61dfb32ad85ecb51d22a",
        "index": 4,
        "age": 20,
        "eyeColor": "brown",
        "name": "Jenny Mcdowell",
        "gender": "female",
        "company": "GROK"
    }
]

회원정보[0]
회원정보[0]['name']
회원정보[1]['company']

let 나이평균 = ( 회원정보[0]['age']+회원정보[1]['age']+회원정보[2]['age']+회원정보[3]['age']+회원정보[4]['age']+회원정보[5]['age'] ) / 6
console.log(나이평균)