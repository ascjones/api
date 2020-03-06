[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["generic/Call"](../modules/_generic_call_.md) › [Call](_generic_call_.call.md)

# Class: Call <**S, T, V, E**>

**`name`** Call

**`description`** 
Extrinsic function descriptor, as defined in
[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **Call**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)
* [IMethod](../interfaces/_types_interfaces_.imethod.md)

## Index

### Constructors

* [constructor](_generic_call_.call.md#constructor)

### Properties

* [#Types](_generic_call_.call.md##types)
* [#jsonMap](_generic_call_.call.md##jsonmap)
* [registry](_generic_call_.call.md#registry)

### Accessors

* [Type](_generic_call_.call.md#type)
* [args](_generic_call_.call.md#args)
* [argsDef](_generic_call_.call.md#argsdef)
* [callIndex](_generic_call_.call.md#callindex)
* [data](_generic_call_.call.md#data)
* [defKeys](_generic_call_.call.md#defkeys)
* [encodedLength](_generic_call_.call.md#encodedlength)
* [hasOrigin](_generic_call_.call.md#hasorigin)
* [hash](_generic_call_.call.md#hash)
* [isEmpty](_generic_call_.call.md#isempty)
* [meta](_generic_call_.call.md#meta)
* [methodName](_generic_call_.call.md#methodname)
* [sectionName](_generic_call_.call.md#sectionname)

### Methods

* [eq](_generic_call_.call.md#eq)
* [get](_generic_call_.call.md#get)
* [getAtIndex](_generic_call_.call.md#getatindex)
* [toArray](_generic_call_.call.md#toarray)
* [toHex](_generic_call_.call.md#tohex)
* [toHuman](_generic_call_.call.md#tohuman)
* [toJSON](_generic_call_.call.md#tojson)
* [toRawType](_generic_call_.call.md#torawtype)
* [toString](_generic_call_.call.md#tostring)
* [toU8a](_generic_call_.call.md#tou8a)
* [filterOrigin](_generic_call_.call.md#static-filterorigin)
* [typesToMap](_generic_call_.call.md#static-typestomap)
* [with](_generic_call_.call.md#static-with)

## Constructors

###  constructor

\+ **new Call**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: any, `meta?`: FunctionMetadataLatest): *[Call](_generic_call_.call.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/generic/Call.ts:120](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value` | any |
`meta?` | FunctionMetadataLatest |

**Returns:** *[Call](_generic_call_.call.md)*

## Properties

###  #Types

• **#Types**: *[ConstructorDef](../modules/_types_codec_.md#constructordef)*

*Inherited from [Struct](_codec_struct_.struct.md).[#Types](_codec_struct_.struct.md##types)*

*Defined in [packages/types/src/codec/Struct.ts:110](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L110)*

___

###  #jsonMap

• **#jsonMap**: *[Map](_codec_struct_.struct.md#static-map)‹keyof S, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[#jsonMap](_codec_struct_.struct.md##jsonmap)*

*Defined in [packages/types/src/codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L108)*

___

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IMethod](../interfaces/_types_interfaces_.imethod.md).[registry](../interfaces/_types_interfaces_.imethod.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:106](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L106)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  args

• **get args**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Defined in [packages/types/src/generic/Call.ts:146](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L146)*

**`description`** The arguments for the function call

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_types_codec_.md#argsdef)*

*Defined in [packages/types/src/generic/Call.ts:154](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L154)*

**`description`** The argument definitions

**Returns:** *[ArgsDef](../modules/_types_codec_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/generic/Call.ts:161](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L161)*

**`description`** The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  data

• **get data**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/generic/Call.ts:168](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L168)*

**`description`** The encoded data

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L180)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [packages/types/src/generic/Call.ts:175](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L175)*

**`description`** `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** *boolean*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *FunctionMetadataLatest*

*Defined in [packages/types/src/generic/Call.ts:184](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L184)*

**`description`** The [[FunctionMetadata]]

**Returns:** *FunctionMetadataLatest*

___

###  methodName

• **get methodName**(): *string*

*Defined in [packages/types/src/generic/Call.ts:191](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L191)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  sectionName

• **get sectionName**(): *string*

*Defined in [packages/types/src/generic/Call.ts:198](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L198)*

**`description`** Returns the module containing the method

**Returns:** *string*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IMethod](../interfaces/_types_interfaces_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L198)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [CodecMap](_codec_map_.codecmap.md).[get](_codec_map_.codecmap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L206)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExpanded?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [IMethod](../interfaces/_types_interfaces_.imethod.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toHuman](_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/generic/Call.ts:205](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L205)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExpanded?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [IMethod](../interfaces/_types_interfaces_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L247)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IMethod](../interfaces/_types_interfaces_.imethod.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/generic/Call.ts:229](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L229)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IMethod](../interfaces/_types_interfaces_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:280](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L280)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [IMethod](../interfaces/_types_interfaces_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:288](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L288)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` filterOrigin

▸ **filterOrigin**(`meta?`: FunctionMetadataLatest): *FunctionArgumentMetadataLatest[]*

*Defined in [packages/types/src/generic/Call.ts:134](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/generic/Call.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | FunctionMetadataLatest |

**Returns:** *FunctionArgumentMetadataLatest[]*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S, `jsonMap?`: [Map](_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/adee447cd/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_codec_struct_.struct.md#static-map)‹keyof S, string› |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*