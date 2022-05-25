import { findRoutes } from './follow-that-spy';

describe('test suites for findRoutes kata', () => {
  test('should return "MNL, TAG, CEB, TAC, BOR"', () => {
    expect(
      findRoutes([
        ['MNL', 'TAG'],
        ['CEB', 'TAC'],
        ['TAG', 'CEB'],
        ['TAC', 'BOR'],
      ])
    ).toBe('MNL, TAG, CEB, TAC, BOR');
  });

  test('should return "UK, GER, BEL, CAN"', () => {
    expect(
      findRoutes([
        ['UK', 'GER'],
        ['GER', 'BEL'],
        ['BEL', 'CAN'],
      ])
    ).toBe('UK, GER, BEL, CAN');
  });

  test('should return "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"', () => {
    expect(
      findRoutes([
        ['Chicago', 'Winnipeg'],
        ['Halifax', 'Montreal'],
        ['Montreal', 'Toronto'],
        ['Toronto', 'Chicago'],
        ['Winnipeg', 'Seattle'],
      ])
    ).toBe('Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle');
  });

  test('should return "Seoul, Ljubljana, Wroclaw, Nashville, Amsterdam, Hull, Vancouver, Agra, Tokyo, Manila"', () => {
    expect(
      findRoutes([
        ['Agra', 'Tokyo'],
        ['Seoul', 'Ljubljana'],
        ['Ljubljana', 'Wroclaw'],
        ['Wroclaw', 'Nashville'],
        ['Nashville', 'Amsterdam'],
        ['Amsterdam', 'Hull'],
        ['Hull', 'Vancouver'],
        ['Vancouver', 'Agra'],
        ['Tokyo', 'Manila'],
      ])
    ).toBe(
      'Seoul, Ljubljana, Wroclaw, Nashville, Amsterdam, Hull, Vancouver, Agra, Tokyo, Manila'
    );
  });

  test('should return "Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal"', () => {
    expect(
      findRoutes([
        ['Calgary', 'Fargo'],
        ['Spokane', 'Toronto'],
        ['Winnipeg', 'Montreal'],
        ['Toronto', 'Calgary'],
        ['Fargo', 'Winnipeg'],
      ])
    ).toBe('Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal');
  });

  test('should return "USA, BRA, KSA, UAE, JPN, PHL"', () => {
    expect(
      findRoutes([
        ['BRA', 'KSA'],
        ['USA', 'BRA'],
        ['JPN', 'PHL'],
        ['KSA', 'UAE'],
        ['UAE', 'JPN'],
      ])
    ).toBe('USA, BRA, KSA, UAE, JPN, PHL');
  });

  test('should return "HQ, SH"', () => {
    expect(findRoutes([['HQ', 'SH']])).toBe('HQ, SH');
  });

  test('should return "Jipapad, Maslog, Arteche, San Policarpo, Oras, Dolores, Can-avid, Taft, Sulat, San Julian, Borongan, Maydolong, Balangkayan, Llorente, Hernani, General MacArthur, Giporlos, Balangiga, Lawaan, Salcedo, Mercedes, Guiuan"', () => {
    expect(
      findRoutes([
        ['San Policarpo', 'Oras'],
        ['Balangiga', 'Lawaan'],
        ['Borongan', 'Maydolong'],
        ['Jipapad', 'Maslog'],
        ['Balangkayan', 'Llorente'],
        ['Mercedes', 'Guiuan'],
        ['Taft', 'Sulat'],
        ['Sulat', 'San Julian'],
        ['Arteche', 'San Policarpo'],
        ['Oras', 'Dolores'],
        ['Dolores', 'Can-avid'],
        ['Can-avid', 'Taft'],
        ['San Julian', 'Borongan'],
        ['Maydolong', 'Balangkayan'],
        ['Llorente', 'Hernani'],
        ['Hernani', 'General MacArthur'],
        ['General MacArthur', 'Giporlos'],
        ['Giporlos', 'Balangiga'],
        ['Lawaan', 'Salcedo'],
        ['Salcedo', 'Mercedes'],
        ['Maslog', 'Arteche'],
      ])
    ).toBe(
      'Jipapad, Maslog, Arteche, San Policarpo, Oras, Dolores, Can-avid, Taft, Sulat, San Julian, Borongan, Maydolong, Balangkayan, Llorente, Hernani, General MacArthur, Giporlos, Balangiga, Lawaan, Salcedo, Mercedes, Guiuan'
    );
  });
});
