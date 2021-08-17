import 'package:flutter/material.dart';
import 'package:adobe_xd/pinned.dart';

class XDMainPage extends StatelessWidget {
  XDMainPage({
    Key key,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xffffffff),
      body: Stack(
        children: <Widget>[
          Pinned.fromPins(
            Pin(start: 0.0, end: 0.0),
            Pin(start: 0.0, end: 0.0),
            child:
                // Adobe XD layer: 'mainpage' (group)
                Stack(
              children: <Widget>[
                Pinned.fromPins(
                  Pin(start: 0.0, end: 0.0),
                  Pin(start: 0.0, end: 0.0),
                  child:
                      // Adobe XD layer: 'background' (shape)
                      Container(
                    decoration: BoxDecoration(
                      color: const Color(0xffffffff),
                      border: Border.all(
                          width: 1.0, color: const Color(0xff707070)),
                    ),
                  ),
                ),
                Pinned.fromPins(
                  Pin(start: 0.0, end: 0.0),
                  Pin(size: 126.0, start: 0.0),
                  child:
                      // Adobe XD layer: 'title_wrap' (group)
                      Stack(
                    children: <Widget>[
                      Pinned.fromPins(
                        Pin(start: 0.0, end: 0.0),
                        Pin(start: 0.0, end: 0.0),
                        child:
                            // Adobe XD layer: 'background_title' (shape)
                            Container(
                          decoration: BoxDecoration(
                            color: const Color(0xffdde0ea),
                          ),
                        ),
                      ),
                      Pinned.fromPins(
                        Pin(start: 32.0, end: 32.0),
                        Pin(size: 53.0, middle: 0.4932),
                        child:
                            // Adobe XD layer: 'titletext' (text)
                            Text(
                          'Health Coin Alarm',
                          style: TextStyle(
                            fontFamily: 'Segoe UI',
                            fontSize: 40,
                            color: const Color(0xff000000),
                            fontStyle: FontStyle.italic,
                            fontWeight: FontWeight.w700,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ],
                  ),
                ),
                Pinned.fromPins(
                  Pin(start: 0.0, end: 0.0),
                  Pin(size: 278.0, start: 125.0),
                  child:
                      // Adobe XD layer: 'image_wrap' (group)
                      Stack(
                    children: <Widget>[
                      Pinned.fromPins(
                        Pin(start: 0.0, end: 0.0),
                        Pin(start: 0.0, end: 0.0),
                        child:
                            // Adobe XD layer: 'background_img' (shape)
                            Container(
                          decoration: BoxDecoration(
                            color: const Color(0xffffffff),
                            border: Border.all(
                                width: 1.0, color: const Color(0xff707070)),
                          ),
                        ),
                      ),
                      Pinned.fromPins(
                        Pin(start: 0.0, end: 0.0),
                        Pin(start: 1.0, end: 1.0),
                        child:
                            // Adobe XD layer: 'alarm_img' (shape)
                            Container(
                          decoration: BoxDecoration(
                            image: DecorationImage(
                              image: const AssetImage(''),
                              fit: BoxFit.fill,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Pinned.fromPins(
                  Pin(start: 0.0, end: 0.0),
                  Pin(size: 494.0, end: 0.0),
                  child:
                      // Adobe XD layer: 'index_wrap' (group)
                      Stack(
                    children: <Widget>[
                      Pinned.fromPins(
                        Pin(start: 0.0, end: 0.0),
                        Pin(start: 1.0, end: 0.0),
                        child:
                            // Adobe XD layer: 'background1' (shape)
                            Container(
                          decoration: BoxDecoration(
                            color: const Color(0xffdde0ea),
                          ),
                        ),
                      ),
                      Pinned.fromPins(
                        Pin(start: 0.0, end: 0.0),
                        Pin(start: 0.0, end: 0.0),
                        child:
                            // Adobe XD layer: 'index' (group)
                            Stack(
                          children: <Widget>[
                            Pinned.fromPins(
                              Pin(start: 0.0, end: 0.0),
                              Pin(size: 118.0, start: 0.0),
                              child:
                                  // Adobe XD layer: 'index1' (group)
                                  Stack(
                                children: <Widget>[
                                  Pinned.fromPins(
                                    Pin(start: 0.0, end: 0.0),
                                    Pin(start: 0.0, end: 0.0),
                                    child:
                                        // Adobe XD layer: 'background2' (shape)
                                        Container(
                                      decoration: BoxDecoration(
                                        color: const Color(0xffdde0ea),
                                        border: Border.all(
                                            width: 1.0,
                                            color: const Color(0xff707070)),
                                      ),
                                    ),
                                  ),
                                  Pinned.fromPins(
                                    Pin(size: 170.0, middle: 0.5),
                                    Pin(size: 54.0, middle: 0.5156),
                                    child:
                                        // Adobe XD layer: 'text1' (text)
                                        Text(
                                      '알람 수정',
                                      style: TextStyle(
                                        fontFamily: 'Segoe UI',
                                        fontSize: 40,
                                        color: const Color(0xff000000),
                                        fontWeight: FontWeight.w600,
                                      ),
                                      textAlign: TextAlign.center,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            Pinned.fromPins(
                              Pin(start: 0.0, end: 0.0),
                              Pin(size: 118.0, middle: 0.3138),
                              child:
                                  // Adobe XD layer: 'index2' (group)
                                  Stack(
                                children: <Widget>[
                                  Pinned.fromPins(
                                    Pin(start: 0.0, end: 0.0),
                                    Pin(start: 0.0, end: 0.0),
                                    child:
                                        // Adobe XD layer: 'background3' (shape)
                                        Container(
                                      decoration: BoxDecoration(
                                        color: const Color(0xffdde0ea),
                                        border: Border.all(
                                            width: 1.0,
                                            color: const Color(0xff707070)),
                                      ),
                                    ),
                                  ),
                                  Pinned.fromPins(
                                    Pin(size: 206.0, middle: 0.5192),
                                    Pin(size: 54.0, middle: 0.5),
                                    child:
                                        // Adobe XD layer: 'on' (group)
                                        Stack(
                                      children: <Widget>[
                                        Pinned.fromPins(
                                          Pin(size: 162.0, start: 0.0),
                                          Pin(start: 0.0, end: 0.0),
                                          child:
                                              // Adobe XD layer: 'text2' (text)
                                              Text(
                                            '알람 ON ',
                                            style: TextStyle(
                                              fontFamily: 'Segoe UI',
                                              fontSize: 40,
                                              color: const Color(0xff000000),
                                              fontWeight: FontWeight.w600,
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                        Pinned.fromPins(
                                          Pin(size: 44.0, end: 0.0),
                                          Pin(start: 5.0, end: 5.0),
                                          child:
                                              // Adobe XD layer: 'check' (shape)
                                              Container(
                                            decoration: BoxDecoration(
                                              color: const Color(0xffffffff),
                                              border: Border.all(
                                                  width: 1.0,
                                                  color:
                                                      const Color(0xff707070)),
                                            ),
                                          ),
                                        ),
                                        Pinned.fromPins(
                                          Pin(start: 0.0, end: 0.0),
                                          Pin(start: 5.0, end: 5.0),
                                          child:
                                              // Adobe XD layer: 'background_on' (shape)
                                              Container(
                                            decoration: BoxDecoration(),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            Pinned.fromPins(
                              Pin(start: 0.0, end: 0.0),
                              Pin(size: 118.0, middle: 0.625),
                              child:
                                  // Adobe XD layer: 'index3' (group)
                                  Stack(
                                children: <Widget>[
                                  Pinned.fromPins(
                                    Pin(start: 0.0, end: 0.0),
                                    Pin(start: 0.0, end: 0.0),
                                    child:
                                        // Adobe XD layer: 'background4' (shape)
                                        Container(
                                      decoration: BoxDecoration(
                                        color: const Color(0xffdde0ea),
                                        border: Border.all(
                                            width: 1.0,
                                            color: const Color(0xff707070)),
                                      ),
                                    ),
                                  ),
                                  Pinned.fromPins(
                                    Pin(size: 134.0, middle: 0.5),
                                    Pin(size: 54.0, middle: 0.5),
                                    child:
                                        // Adobe XD layer: 'text3' (text)
                                        Text(
                                      'Coin 수',
                                      style: TextStyle(
                                        fontFamily: 'Segoe UI',
                                        fontSize: 40,
                                        color: const Color(0xff000000),
                                        fontWeight: FontWeight.w600,
                                      ),
                                      textAlign: TextAlign.center,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            Pinned.fromPins(
                              Pin(start: 0.0, end: 0.0),
                              Pin(size: 141.0, end: 0.0),
                              child:
                                  // Adobe XD layer: 'index4' (group)
                                  Stack(
                                children: <Widget>[
                                  Pinned.fromPins(
                                    Pin(start: 0.0, end: 0.0),
                                    Pin(start: 0.0, end: 0.0),
                                    child: Container(
                                      decoration: BoxDecoration(
                                        color: const Color(0xffdde0ea),
                                        border: Border.all(
                                            width: 1.0,
                                            color: const Color(0xff707070)),
                                      ),
                                    ),
                                  ),
                                  Pinned.fromPins(
                                    Pin(start: 45.0, end: 44.0),
                                    Pin(start: 13.0, end: 10.0),
                                    child:
                                        // Adobe XD layer: 'startbtn' (group)
                                        Stack(
                                      children: <Widget>[
                                        Pinned.fromPins(
                                          Pin(start: 0.0, end: 0.0),
                                          Pin(start: 0.0, end: 0.0),
                                          child:
                                              // Adobe XD layer: 'background5' (shape)
                                              Container(
                                            decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(51.0),
                                              color: const Color(0xff857979),
                                              border: Border.all(
                                                  width: 2.0,
                                                  color:
                                                      const Color(0xff707070)),
                                            ),
                                          ),
                                        ),
                                        Pinned.fromPins(
                                          Pin(start: 37.0, end: 38.0),
                                          Pin(size: 54.0, middle: 0.5),
                                          child:
                                              // Adobe XD layer: 'starttext' (text)
                                              Text(
                                            '기상미션 시작',
                                            style: TextStyle(
                                              fontFamily: 'Segoe UI',
                                              fontSize: 40,
                                              color: const Color(0xfff9f5f5),
                                              fontWeight: FontWeight.w600,
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
