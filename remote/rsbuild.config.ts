import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

import pkg from "./package.json";

const analyzerMode = process.env.ANALYZE ? "static" : "json";

export default defineConfig({
	plugins: [pluginReact()],
  performance: {
    bundleAnalyze: {
      analyzerMode,
      generateStatsFile: analyzerMode === "json",
      openAnalyzer: analyzerMode === "static",
      reportFilename: analyzerMode === "json" ? "report.json" : "report.html",
    },
  },
	moduleFederation: {
		options: {
			name: "my_remote",
			filename: "remoteEntry.js",
			exposes: {
				"./Button": "./src/Button.tsx",
			},
			shared: {
				react: {
					singleton: true,
					requiredVersion: pkg.dependencies["react"],
				},
				"react-dom": {
					singleton: true,
					requiredVersion: pkg.dependencies["react-dom"],
				},
			},
		},
	},
});
