import 'package:angel_orm/angel_orm.dart';

class BaseModel {
  @Column(
      type: ColumnType.uniqueIdentifier,
      isNullable: false,
      indexType: IndexType.primaryKey)
  //@primaryKey
  String id;

  @Column(type: ColumnType.timeStampWithTimeZone)
  DateTime createdAt;

  @Column(type: ColumnType.timeStampWithTimeZone)
  DateTime updatedAt;
}
