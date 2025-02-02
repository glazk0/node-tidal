import { describe } from 'mocha';
import { expect } from 'chai';

import { Tidal } from '../src';
import axios from 'axios';

describe('tracks', () => {
  let tidal: Tidal;

  before(() => {
    tidal = new Tidal({
      token: process.env.TIDAL_TOKEN!,
      countryCode: 'BE',
    });
  });

  it('should return a specified track', async () => {
    const track = await tidal.tracks.getTrack(1317754);

    expect(track).to.be.an('object').and.to.have.property('id');
  });

  it('should return contributors from a specified track', async () => {
    const track = await tidal.tracks.getTrackContributors(1317754);

    expect(track).to.be.an('array');
  });

  //   it('should return the lyrics from a specified track', async () => {});

  //   it('should return a specified track stream url', async () => {});
});
