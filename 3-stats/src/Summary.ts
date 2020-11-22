import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';
import { ConsoleReport } from './reportTargets/ConsoleReport';
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new ConsoleReport(),
      new HtmlReport()
    );
  }
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget,
    public htmlReport: OutputTarget
  ) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
    this.htmlReport.print(output);
  }
}
