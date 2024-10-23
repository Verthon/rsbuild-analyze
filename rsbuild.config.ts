import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const analyzerMode = "json";

console.log(analyzerMode);

export default defineConfig({
	plugins: [pluginReact()],
	performance: {
		bundleAnalyze: {
			analyzerMode: 'json',
			generateStatsFile: analyzerMode === "json",
			openAnalyzer: analyzerMode === "static",
			reportFilename: analyzerMode === "json" ? "report.json" : "report.html",
		},
	},
});
