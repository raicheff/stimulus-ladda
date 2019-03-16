/*
 * Stimulus-Ladda
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import * as Ladda from "ladda";
import { Controller } from "stimulus";


export default class extends Controller {

  connect() {

    this.element.classList.add("ladda-button");

    this.instance = Ladda.create(this.element);

  }

  disconnect() {

    this.instance.remove();

  }

  start() {

    this.instance.start();

  }

  stop() {

    this.instance.stop();

  }

  toggle() {

    this.instance.toggle();

  }

}


/* EOF */
