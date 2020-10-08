import 'package:angel_migration/angel_migration.dart';
import 'package:angel_orm/angel_orm.dart';
import 'package:angel_serialize/angel_serialize.dart';
import 'package:graphql_schema/graphql_schema.dart';

import 'base.dart';

part 'stock.g.dart';

@graphQLClass
@serializable
@Orm(tableName: 'stocks')
abstract class _Stock extends BaseModel {
  @Column(isNullable: false, indexType: IndexType.standardIndex)
  String get title;
}
