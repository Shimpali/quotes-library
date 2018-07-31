import { isAbsolute } from "path";
import { THROW_IF_NOT_FOUND } from "../../node_modules/@angular/core/src/di/injector";

export class SettingsService {
  private altBackground = false;

  setBackground(isAlt: boolean) {
    this.altBackground = isAlt;
  }

  isAltBackground() {
    return this.altBackground;
  }

}
