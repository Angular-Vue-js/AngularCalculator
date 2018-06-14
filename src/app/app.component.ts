import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-root',
    templateUrl: './index.html'
})
export class AppComponent {
    firstInputS: string;
    lastInputS: string;
    something: string;

    firstInputD: string;
    lastInputD: string;
    something2: string;

    firstInputP: string;
    lastInputP: string;
    something3: string;

    firstInputQ: string;
    lastInputQ: string;
    something4: string;

    constructor() {

    }

    onSubmit() {
        if (this.firstInputS && this.lastInputS) {
            this.something = this.firstInputS + " + " + this.lastInputS + " = " + (Number(this.firstInputS) + Number(this.lastInputS)).toFixed(2);
            this.firstInputS = null;
            this.lastInputS = null;
        }
    }

    onSubmit2() {
        if (this.firstInputD && this.lastInputD) {
            this.something2 = this.firstInputD + " - " + this.lastInputD + " = " + (Number(this.firstInputD) - Number(this.lastInputD)).toFixed(2);
            this.firstInputD = null;
            this.lastInputD = null;
        }
    }

    onSubmit3() {
        if (this.firstInputP && this.lastInputP) {
            this.something3 = this.firstInputP + " * " + this.lastInputP + " = " + (Number(this.firstInputP) * Number(this.lastInputP)).toFixed(2);
            this.firstInputP = null;
            this.lastInputP = null;
        }
    }

    onSubmit4() {
        if (this.firstInputQ && this.lastInputQ) {
            this.something4 = this.firstInputQ + " \\\ " + this.lastInputQ + " = " + (Number(this.firstInputQ) / Number(this.lastInputQ)).toFixed(2);
            this.firstInputQ = null;
            this.lastInputQ = null;
        }
    }


}

