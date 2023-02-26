import Vue from '../modules/vue'

const vm = new Vue({
    data () {
        return {
            a: 1,
            b: 2
        }
    },
    computed: {
        // total () {
        //     console.log('Computed');
        //     return this.a + this.b;
        // },
        total: {
            get () {
                console.log('Computed');
                return this.a + this.b;
            }
        }
    },
    watch: {
        total (newValue, oldValue) {
            console.log('total', newValue, oldValue);
        },
        a (newValue, oldValue) {
            console.log('a', newValue, oldValue);
        },
        b (newValue, oldValue) {
            console.log('b', newValue, oldValue);
        }
    }
});

console.log(vm);

console.log(vm.total);
console.log(vm.total);
console.log(vm.total);

vm.a = 100;

console.log(vm.total);
console.log(vm.total);
console.log(vm.total);

vm.b = 200;

console.log(vm.total);
console.log(vm.total);
console.log(vm.total);


console.log(parseInt(84, 8))