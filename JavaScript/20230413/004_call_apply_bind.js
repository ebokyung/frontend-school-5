// apply, call, bind

// call
// call() 메서드의 인수에 this 로 사용할 값을 전달할 수 있습니다.
var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName()
peter.sayName.call(bruce);

////
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사) {
        console.log(this.name + 감탄사);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!'); // Bruce Wayne!
peter.sayName('!') // Peter Parker!
peter.sayName() // Peter Parkerundefined


// apply
var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);

// call과 apply 비교
// 비교1
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!', '!!');

// 비교2
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, ['!', '!!']); // Bruce Wayne!,!!undefined
// (call은 배열 안됨, 그냥 여러개 아규먼트로 넘겨줘야 함)


//bind
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}

var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)
}

peter.sayName();
bruce.sayName();


/*
call은 두번째 아규먼트에 야규먼트 낱개로 넣어야 함
apply는 두번째 아규먼트에 배열을 넣어야 함
bind는 함수를 실행하지 않음. 대신 bound함수를 리턴함
*/