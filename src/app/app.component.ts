import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface fruit {
    name: string,
    selected: boolean
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    form: FormGroup;

    fruitList: fruit[] = [
        {
            name: "apple",
            selected: false
        },
        {
            name: "banana",
            selected: false
        },
        {
            name: "grape",
            selected: false
        },
        {
            name: "pear",
            selected: false
        },
        {
            name: "orange",
            selected: false
        }
    ]

    constructor(public fb: FormBuilder) {
        this.form = this.fb.group({
            apple: [false],
            banana: [false],
            grape: [false],
            pear: [false],
            orange: [false]
        });
    }

    ngOnInit() {
        this.form.valueChanges
            .subscribe(() => {
                this.fruitList[0].selected = this.form.controls.apple.value;
                this.fruitList[1].selected = this.form.controls.banana.value;
                this.fruitList[2].selected = this.form.controls.grape.value;
                this.fruitList[3].selected = this.form.controls.pear.value;
                this.fruitList[4].selected = this.form.controls.orange.value;
            })
    }
}
