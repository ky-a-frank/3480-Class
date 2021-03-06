var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  xxx           ",
   "                                                                 xx!xx          ",
   "                                           x x                   x!!!x          ",
   "                                         xxxxxx                  xx!xx          ",
   "                                       xxxxxxvxxx                 xvx           ",
   "                                       vxx  x  x                            xx  ",
   "  xx          xx                x                       x                    x  ",
   "  x           vv                v                       v                    x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x  @                 z              o  z  z  o             o   xxxxx    k  x  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxttxxxxxxxxxx   xxxxxxxx   xxxxxxxxx  ",
   "             x  x             x   x                  x     x                    ",
   "             x!!x             x!!!x                  x!!!!!x                    ",
   "             x!!x             x!!!x                  x!!!!!x                    ",
   "             xxxx             xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                                        v v      v   v   v                                        ",
   "                                                       v v                                                        ",
   "                                                                                            x                     ",
   "                                               xxx           xx                                                   ",
   "                                              x!xxxxxx       x       k                                      ox!x  ",
   "                                              vxxx!!!v       x                           o           z      xx!x  ",
   "                                                 x!xx        x                          xx    xxxxxxxxxxxxxxx!!x  ",
   "                                                 xvx       xxx     x   x             o    !!|!!!!!!!!!!!!!!!!!xx  ",
   "                                                             xx             xx      xx   vxxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx                                     ",
   "                          x                                    xxxx!!!!!xxxx                                      ",
   "                  x       v              x           x            xxxxxvx        xxx                              ",
   "                  v       v            xxxx x        x                             x                              ",
   "                                      xvx xxv        x                             xo        x                    ",
   "                  o                                  x                             xx        x                    ",
   "                                               xx    x                             x         x                    ",
   "                                         oo    x     x               x   x         x         x                    ",
   "               x!!!!!x                   xx    x     x      o o      x o x    o    x         x                    ",
   "              xx!!!!!xx             x          x    ox     ttttt     x   x   xxxxxxxxx       x                    ",
   "             xxxxxxxxxxx          xxx          x    xx               x   x  ox               x                    ",
   "     @                              x          x     x               x o xxxxx    o          x                    ",
   "    xxx  x                          x!!!!!!!!!!x     x               x           xxxxxx      x                    ",
   "    xxx           z          xxx    xx!!!!!!!!!x     x               x           x x         x                    ",
   "!!!!xxx      xxxxtttxxxx!!!!!!x    xxxxxxxxxxxxxx    x!!!!!!!!!!     x o         x x         x                    ",
   "!!!!!xx!!!!!!x!!!!!!!!!x!!!!!xx   x                  x!!!!!!!xx!     x     z     x xx       xx                    ",
   "!!!!x!x!!!!!!x!!!!!!!!!x!!!!!x                      xx!!!!!!xx !     xxxxtttttxxxx  xx  k  xx                     ",
   "!!!!xx!!!!!!!x!!!!!!!!!!!!!!!xj            z       xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!xxx!!!!!!!!!!!!!!!!x!!!!!xx       xxxxtttttxxxxx!!!!!!xx   !                                                  ",
   "!!!!xxx!!!!!!x!!!!!!!!!x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!xxx!!!!!!x!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                  v                           ",
   "                                             v     v           v                    v                         ",
   "                                                      v               v   v     v           v                 ",
   "                                                v         v                             v                     ",
   "                                                             v     v         v                                ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        k                                                                     ",
   "                                       ttt                                  k                                 ",
   "                                       xvx                                 xxx                                ",
   "                                      ox x                  x                                                 ",
   "                                     xxx xtt                x          t                                      ",
   "                                      x   x                xxx  oooo  xx       xxx                            ",
   "                                      x   x                x    z      x      x!!!x                           ",
   "                                     ox   x                xxxtxxxttxxxx       xvx                            ",
   "                                     xx   xx   o  t   x      x                                                ",
   "                                      x   xxxxxxttt   xxxxxxxx              x|x                               ",
   "                                      x   x   v       x                    x!!!x                              ",
   "                                     ox   x         o x                     xxx                               ",
   "                                     xx   x       ttxxx                                                       ",
   "                                      x   x       v   x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                     ox   x o         x     o      xvx       xxx                              ",
   "                                     xx   xtttx       x                     x!!!x                             ",
   "                              o       x!!!x           x     x                xvx        xxx                   ",
   "                                      x!!!x           x              x                 x!!!x                  ",
   "                             ttt      x!!!xx     o o  x!!!!!!!!!!!!!!x                  xvx                   ",
   "                             t xxxx   xxxxxx          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xttxxxxxvxvxxvxxxxvxvxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xvx                 x x  ",
   "  x                           x   xxxxx   xxxxttt                        ttt                               x  ",
   "  x                           x           x                              t                 x               x  ",
   "  x                        xxxx          xx         o          o        ox                      k          x  ",
   "  x                                       x        xxtt      xttx      xxx                     ttt         x  ",
   "  x                                o o    x                              x         xxx                     x  ",
   "  x                                 j     x                             xxx       x!!!x   x|x              x  ",
   "  x                           x!!!!xxx!!!!x                             x x        xvx   x!!!x             x  ",
   "  x                           xxxxxxxxxxxxx  x o x      xoox      x o  xx xx            x!xxx!x            x  ",
   "  x      @      z     z      x           x!!x   x!!!!!!x  x!!!!!!x    xx   xx          z ! x !   z         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
   ["                                                                                                             ",
   "                                                                                                              ",
   "                                                                   x     x     x     x     x      xxxxxx      ",
   "                                                                                            xx    x           ",
   "                                                                                                  x   xxxx    ",
   "                                                              x                                 xxx   x       ",
   "                                                                                                  xx  x       ",
   "                                                                o     z     o     z           z       x       ",
   "                                                              xttxx xtttx xtttx xtttx xtttx xxxxx xxxxx       ",
   "                                                              x   x x   x x   x x   x x   x x   x x           ",
   "                                                        xx    xxx x|xxx x|xxx x|xxx x|xxx x|xxx x xxxxx       ",
   "           o                                                    x x!!!x x!!!x x!!!x x!!!x x!!!x x     x       ",
   "          txt                                                xxxx xxxvx xxxvx xxxvx xxxvx xxxvx xxxxxxx       ",
   "                  o                                                                                           ",
   "                 xtt                                      xx                                                  ",
   "                                                                                                              ",
   "                         xxx                                                                                  ",
   "                    o                                 tx                                                      ",
   "                   xxx         xxx       xx                                    xx          xx                 ",
   "                    v           v                  xx                    o             o                      ",
   "                          o                                              tx            tx        xx           ",
   "                                               tt         xx     xx                                           ",
   "             ttt         xxx         xxx                                                            xx        ",
   "                                                     xxx     xxx    xxx                        o              ",
   "                                                     vvv     vvv    vvv                       xt              ",
   "  x         x                                                                                                 ",
   "  x         x o xxx!!!xxx o xx!!!!!xx o xx                                                xx                  ",
   "  x         x   x  xxxx x   x xxxxx x   xv                                    xx    tx                        ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx      j                                                              ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x                   z                 x   x                     xxx                                   ",
   "        xxxxxxxttttxxttttxxttttxxtttttxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!|!!!!!!!|!!!!!!!!!|!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
   ];


if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
