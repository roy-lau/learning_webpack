webpack --help
webpack 3.2.0
Usage: https://webpack.js.org/api/cli/
Usage without config file: webpack <entry> [<entry>] <output>
Usage with config file: webpack

Config options:
  --config  Path to the config file
                          [字符串] [默认值: webpack.config.js or webpackfile.js]
  --env     Environment passed to the config, when it is a function

Basic options:
  --context    The root directory for resolving entry point and stats
                                        [字符串] [默认值: The current directory]
  --entry      The entry point                                          [字符串]
  --watch, -w  Watch the filesystem for changes                           [布尔]
  --debug      Switch loaders to debug mode                               [布尔]
  --devtool    Enable devtool for better debugging experience (Example:
               --devtool eval-cheap-module-source-map)                  [字符串]
  -d           shortcut for --debug --devtool eval-cheap-module-source-map
               --output-pathinfo                                          [布尔]
  -p           shortcut for --optimize-minimize --define
               process.env.NODE_ENV="production"                          [布尔]
  --progress   Print compilation progress in percentage                   [布尔]

Module options:
  --module-bind       Bind an extension to a loader                     [字符串]
  --module-bind-post                                                    [字符串]
  --module-bind-pre                                                     [字符串]

Output options:
  --output-path                 The output path for compilation assets
                                        [字符串] [默认值: The current directory]
  --output-filename             The output filename of the bundle
                                                    [字符串] [默认值: [name].js]
  --output-chunk-filename       The output filename for additional chunks
        [字符串] [默认值: filename with [id] instead of [name] or [id] prefixed]
  --output-source-map-filename  The output filename for the SourceMap   [字符串]
  --output-public-path          The public path for the assets          [字符串]
  --output-jsonp-function       The name of the jsonp function used for chunk
                                loading                                 [字符串]
  --output-pathinfo             Include a comment with the request for every
                                dependency (require, import, etc.)        [布尔]
  --output-library              Expose the exports of the entry point as library
                                                                        [字符串]
  --output-library-target       The type for exposing the exports of the entry
                                point as library                        [字符串]

Advanced options:
  --records-input-path       Path to the records file (reading)         [字符串]
  --records-output-path      Path to the records file (writing)         [字符串]
  --records-path             Path to the records file                   [字符串]
  --define                   Define any free var in the bundle          [字符串]
  --target                   The targeted execution environment         [字符串]
  --cache                    Enable in memory caching
                          [布尔] [默认值: It's enabled by default when watching]
  --watch-stdin, --stdin     Exit the process when stdin is closed        [布尔]
  --watch-aggregate-timeout  Timeout for gathering changes while watching
  --watch-poll               The polling interval for watching (also enable
                             polling)                                     [布尔]
  --hot                      Enables Hot Module Replacement               [布尔]
  --prefetch                 Prefetch this request (Example: --prefetch
                             ./file.js)                                 [字符串]
  --provide                  Provide these modules as free vars in all modules
                             (Example: --provide jQuery=jquery)         [字符串]
  --labeled-modules          Enables labeled modules                      [布尔]
  --plugin                   Load this plugin                           [字符串]
  --bail                     Abort the compilation on first error         [布尔]
  --profile                  Profile the compilation and include information in
                             stats                                        [布尔]

Resolving options:
  --resolve-alias         Setup a module alias for resolving (Example:
                          jquery-plugin=jquery.plugin)                  [字符串]
  --resolve-extensions    Setup extensions that should be used to resolve
                          modules (Example: --resolve-extensions .es6 .js)[数组]
  --resolve-loader-alias  Setup a loader alias for resolving            [字符串]

Optimizing options:
  --optimize-max-chunks      Try to keep the chunk count below a limit
  --optimize-min-chunk-size  Try to keep the chunk size above a limit
  --optimize-minimize        Minimize javascript and switches loaders to
                             minimizing                                   [布尔]

Stats options:
  --color, --colors               Enables/Disables colors on the console
                                               [布尔] [默认值: (supports-color)]
  --sort-modules-by               Sorts the modules list by property in module
                                                                        [字符串]
  --sort-chunks-by                Sorts the chunks list by property in chunk
                                                                        [字符串]
  --sort-assets-by                Sorts the assets list by property in asset
                                                                        [字符串]
  --hide-modules                  Hides info about modules                [布尔]
  --display-exclude               Exclude modules in the output         [字符串]
  --display-modules               Display even excluded modules in the output
                                                                          [布尔]
  --display-max-modules           Sets the maximum number of visible modules in
                                  output                                  [数字]
  --display-chunks                Display chunks in the output            [布尔]
  --display-entrypoints           Display entry points in the output      [布尔]
  --display-origins               Display origins of chunks in the output [布尔]
  --display-cached                Display also cached modules in the output
                                                                          [布尔]
  --display-cached-assets         Display also cached assets in the output[布尔]
  --display-reasons               Display reasons about module inclusion in the
                                  output                                  [布尔]
  --display-depth                 Display distance from entry point for each
                                  module                                  [布尔]
  --display-used-exports          Display information about used exports in
                                  modules (Tree Shaking)                  [布尔]
  --display-provided-exports      Display information about exports provided
                                  from modules                            [布尔]
  --display-optimization-bailout  Display information about why optimization
                                  bailed out for modules                  [布尔]
  --display-error-details         Display details about errors            [布尔]
  --display                       Select display preset (verbose, detailed,
                                  normal, minimal, errors-only, none)   [字符串]
  --verbose                       Show more details                       [布尔]

选项：
  --help, -h     显示帮助信息                                             [布尔]
  --version, -v  显示版本号                                               [布尔]
  --json, -j     Prints the result as JSON.                               [布尔]
