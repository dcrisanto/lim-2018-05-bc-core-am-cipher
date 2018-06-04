describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () => {
      assert.equal(cipher.encode(33,'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
    });
    it('debería retornar "! #%&()" para "! #%&()" con offest 33', () => {
      assert.equal(cipher.encode(33,'! #%&()3'), '! #%&()3');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode(33,'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz')
    });
    it('debería retornar "! #%&()" para "! #%&()" con offest 33', () => {
      assert.equal(cipher.decode(33,'! #%&()3'), '! #%&()3');
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.isObject(cipher.createCipherWithOffset(33), 'object');
      assert.property(cipher.createCipherWithOffset(33), 'encode');
      assert.property(cipher.createCipherWithOffset(33), 'decode');      
      assert.isFunction(cipher.createCipherWithOffset(33).encode);
      assert.isFunction(cipher.createCipherWithOffset(33).decode);
      assert.equal(cipher.createCipherWithOffset(33).encode('ABC'), 'HIJ');
      assert.equal(cipher.createCipherWithOffset(33).decode('HIJ'), 'ABC');
      assert.equal(cipher.createCipherWithOffset(33).encode('! #%&()3'), '! #%&()3');
      assert.equal(cipher.createCipherWithOffset(33).decode('! #%&()3'), '! #%&()3');      
    });
  });
});
