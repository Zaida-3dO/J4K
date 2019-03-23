import {Report} from './report';

export class Caption {
  report: Report;
  static extract(content, threshold) {
    return '';
  }

  getCaption(report: Report, threshold) {
      report.caption = Caption.extract(report.content, threshold);
      return report.caption;
  }
}

