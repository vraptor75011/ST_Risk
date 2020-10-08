// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'stock.dart';

// **************************************************************************
// MigrationGenerator
// **************************************************************************

class StockMigration extends Migration {
  @override
  up(Schema schema) {
    schema.create('stocks', (table) {
      table.declare('id', ColumnType('uniqueidentifier'))..notNull();
      table.declare('created_at', ColumnType('timestamp with time zone'));
      table.declare('updated_at', ColumnType('timestamp with time zone'));
      table.varChar('title')..notNull();
    });
  }

  @override
  down(Schema schema) {
    schema.drop('stocks');
  }
}

// **************************************************************************
// OrmGenerator
// **************************************************************************

class StockQuery extends Query<Stock, StockQueryWhere> {
  StockQuery({Set<String> trampoline}) {
    trampoline ??= Set();
    trampoline.add(tableName);
    _where = StockQueryWhere(this);
  }

  @override
  final StockQueryValues values = StockQueryValues();

  StockQueryWhere _where;

  @override
  get casts {
    return {};
  }

  @override
  get tableName {
    return 'stocks';
  }

  @override
  get fields {
    return const ['id', 'created_at', 'updated_at', 'title'];
  }

  @override
  StockQueryWhere get where {
    return _where;
  }

  @override
  StockQueryWhere newWhereClause() {
    return StockQueryWhere(this);
  }

  static Stock parseRow(List row) {
    if (row.every((x) => x == null)) return null;
    var model = Stock(
        id: (row[0] as String),
        createdAt: (row[1] as DateTime),
        updatedAt: (row[2] as DateTime),
        title: (row[3] as String));
    return model;
  }

  @override
  deserialize(List row) {
    return parseRow(row);
  }
}

class StockQueryWhere extends QueryWhere {
  StockQueryWhere(StockQuery query)
      : id = StringSqlExpressionBuilder(query, 'id'),
        createdAt = DateTimeSqlExpressionBuilder(query, 'created_at'),
        updatedAt = DateTimeSqlExpressionBuilder(query, 'updated_at'),
        title = StringSqlExpressionBuilder(query, 'title');

  final StringSqlExpressionBuilder id;

  final DateTimeSqlExpressionBuilder createdAt;

  final DateTimeSqlExpressionBuilder updatedAt;

  final StringSqlExpressionBuilder title;

  @override
  get expressionBuilders {
    return [id, createdAt, updatedAt, title];
  }
}

class StockQueryValues extends MapQueryValues {
  @override
  get casts {
    return {};
  }

  String get id {
    return (values['id'] as String);
  }

  set id(String value) => values['id'] = value;
  DateTime get createdAt {
    return (values['created_at'] as DateTime);
  }

  set createdAt(DateTime value) => values['created_at'] = value;
  DateTime get updatedAt {
    return (values['updated_at'] as DateTime);
  }

  set updatedAt(DateTime value) => values['updated_at'] = value;
  String get title {
    return (values['title'] as String);
  }

  set title(String value) => values['title'] = value;
  void copyFrom(Stock model) {
    id = model.id;
    createdAt = model.createdAt;
    updatedAt = model.updatedAt;
    title = model.title;
  }
}

// **************************************************************************
// JsonModelGenerator
// **************************************************************************

@generatedSerializable
class Stock implements _Stock {
  Stock({this.id, this.createdAt, this.updatedAt, this.title});

  @override
  String id;

  @override
  DateTime createdAt;

  @override
  DateTime updatedAt;

  @override
  final String title;

  Stock copyWith(
      {String id, DateTime createdAt, DateTime updatedAt, String title}) {
    return Stock(
        id: id ?? this.id,
        createdAt: createdAt ?? this.createdAt,
        updatedAt: updatedAt ?? this.updatedAt,
        title: title ?? this.title);
  }

  bool operator ==(other) {
    return other is _Stock &&
        other.id == id &&
        other.createdAt == createdAt &&
        other.updatedAt == updatedAt &&
        other.title == title;
  }

  @override
  int get hashCode {
    return hashObjects([id, createdAt, updatedAt, title]);
  }

  @override
  String toString() {
    return "Stock(id=$id, createdAt=$createdAt, updatedAt=$updatedAt, title=$title)";
  }

  Map<String, dynamic> toJson() {
    return StockSerializer.toMap(this);
  }
}

// **************************************************************************
// SerializerGenerator
// **************************************************************************

const StockSerializer stockSerializer = StockSerializer();

class StockEncoder extends Converter<Stock, Map> {
  const StockEncoder();

  @override
  Map convert(Stock model) => StockSerializer.toMap(model);
}

class StockDecoder extends Converter<Map, Stock> {
  const StockDecoder();

  @override
  Stock convert(Map map) => StockSerializer.fromMap(map);
}

class StockSerializer extends Codec<Stock, Map> {
  const StockSerializer();

  @override
  get encoder => const StockEncoder();
  @override
  get decoder => const StockDecoder();
  static Stock fromMap(Map map) {
    return Stock(
        id: map['id'] as String,
        createdAt: map['created_at'] != null
            ? (map['created_at'] is DateTime
                ? (map['created_at'] as DateTime)
                : DateTime.parse(map['created_at'].toString()))
            : null,
        updatedAt: map['updated_at'] != null
            ? (map['updated_at'] is DateTime
                ? (map['updated_at'] as DateTime)
                : DateTime.parse(map['updated_at'].toString()))
            : null,
        title: map['title'] as String);
  }

  static Map<String, dynamic> toMap(_Stock model) {
    if (model == null) {
      return null;
    }
    return {
      'id': model.id,
      'created_at': model.createdAt?.toIso8601String(),
      'updated_at': model.updatedAt?.toIso8601String(),
      'title': model.title
    };
  }
}

abstract class StockFields {
  static const List<String> allFields = <String>[
    id,
    createdAt,
    updatedAt,
    title
  ];

  static const String id = 'id';

  static const String createdAt = 'created_at';

  static const String updatedAt = 'updated_at';

  static const String title = 'title';
}

// **************************************************************************
// _GraphQLGenerator
// **************************************************************************

/// Auto-generated from [Stock].
final GraphQLObjectType stockGraphQLType =
    objectType('Stock', isInterface: false, interfaces: [], fields: [
  field('id', graphQLString),
  field('created_at', graphQLDate),
  field('updated_at', graphQLDate),
  field('title', graphQLString)
]);
