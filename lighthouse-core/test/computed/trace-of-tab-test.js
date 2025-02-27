/**
 * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* eslint-env jest */

import TraceOfTab from '../../computed/trace-of-tab.js';

import pwaTrace from '../fixtures/traces/progressive-app-m60.json';

describe('TraceOfTab', () => {
  it('computes the artifact', async () => {
    const context = {computedCache: new Map()};
    const traceOfTab = await TraceOfTab.request(pwaTrace, context);

    expect(traceOfTab.processEvents.length).toEqual(12865);
    expect(traceOfTab.mainThreadEvents.length).toEqual(7629);

    delete traceOfTab.processEvents;
    delete traceOfTab.mainThreadEvents;
    delete traceOfTab.frameTreeEvents;
    delete traceOfTab.frameEvents;

    expect(traceOfTab).toEqual({
      mainFrameIds: {
        frameId: '0x25a638821e30',
        pid: 44277,
        tid: 775,
      },
      timeOriginEvt: {
        args: {
          frame: '0x25a638821e30',
        },
        cat: 'blink.user_timing',
        name: 'navigationStart',
        ph: 'R',
        pid: 44277,
        tid: 775,
        ts: 225414172015,
        tts: 455539,
      },
      frames: [],
      domContentLoadedEvt: {
        args: {
          frame: '0x25a638821e30',
        },
        cat: 'blink.user_timing,rail',
        name: 'domContentLoadedEventEnd',
        ph: 'R',
        pid: 44277,
        tid: 775,
        ts: 225414732309,
        tts: 924831,
      },
      firstContentfulPaintEvt: {
        args: {
          frame: '0x25a638821e30',
        },
        cat: 'loading,rail,devtools.timeline',
        name: 'firstContentfulPaint',
        ph: 'I',
        pid: 44277,
        s: 'p',
        tid: 775,
        ts: 225414670885,
        tts: 866570,
      },
      firstContentfulPaintAllFramesEvt: {
        args: {
          frame: '0x25a638821e30',
        },
        cat: 'loading,rail,devtools.timeline',
        name: 'firstContentfulPaint',
        ph: 'I',
        pid: 44277,
        s: 'p',
        tid: 775,
        ts: 225414670885,
        tts: 866570,
      },
      firstMeaningfulPaintEvt: {
        args: {
          frame: '0x25a638821e30',
        },
        cat: 'loading,rail,devtools.timeline',
        name: 'firstMeaningfulPaint',
        ph: 'R',
        pid: 44277,
        tid: 775,
        ts: 225414955343,
        tts: 2676979,
      },
      firstPaintEvt: {
        args: {
          frame: '0x25a638821e30',
        },
        cat: 'loading,rail,devtools.timeline',
        name: 'firstPaint',
        ph: 'I',
        pid: 44277,
        s: 'p',
        tid: 775,
        ts: 225414670868,
        tts: 866553,
      },
      fmpFellBack: false,
      lcpInvalidated: false,
      loadEvt: {
        args: {
          frame: '0x25a638821e30',
        },
        cat: 'blink.user_timing',
        name: 'loadEventEnd',
        ph: 'R',
        pid: 44277,
        tid: 775,
        ts: 225416370913,
        tts: 2369379,
      },
      timestamps: {
        domContentLoaded: 225414732309,
        firstContentfulPaint: 225414670885,
        firstContentfulPaintAllFrames: 225414670885,
        firstMeaningfulPaint: 225414955343,
        firstPaint: 225414670868,
        load: 225416370913,
        timeOrigin: 225414172015,
        traceEnd: 225426711887,
      },
      timings: {
        domContentLoaded: 560.294,
        firstContentfulPaint: 498.87,
        firstContentfulPaintAllFrames: 498.87,
        firstMeaningfulPaint: 783.328,
        firstPaint: 498.853,
        load: 2198.898,
        timeOrigin: 0,
        traceEnd: 12539.872,
      },
    });
  });
});
