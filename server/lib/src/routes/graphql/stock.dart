import 'package:angel_framework/angel_framework.dart';
import 'package:angel_graphql/angel_graphql.dart';
import 'package:angel_orm/angel_orm.dart';
import 'package:angel_orm_service/angel_orm_service.dart';
import 'package:graphql_schema/graphql_schema.dart';

import '../../models/stock.dart';

final stockType = stockGraphQLType;

OrmService _getService(Angel app) {
  const key = 'stockService';

  if (app.container.hasNamed(key)) {
    return app.container.findByName<OrmService>(key);
  }

  print(StockQuery().tableName);

  var executor = app.container.make<QueryExecutor>();

  // var initStock = PostgresMigrationRunner(executor._connection,
  //     migrations: [StockMigration()]);
  var service = OrmService<String, Stock, StockQuery>(
      executor, () => StockQuery(),
      readData: (req, res) => stockSerializer.decode(req.bodyAsMap));

  var q = StockQuery()..where.id.equals('client_a');
  q.getOne(service.executor).then((stock) =>
      stock ?? service.create(Stock(id: 'client_a', title: 'Client A')));

  q = StockQuery()..where.id.equals('client_b');
  q.getOne(service.executor).then((stock) =>
      stock ?? service.create(Stock(id: 'client_b', title: 'Client B')));

  q = StockQuery()..where.id.equals('client_c');
  q.getOne(service.executor).then((stock) =>
      stock ?? service.create(Stock(id: 'client_c', title: 'Client C')));

  app.container.registerNamedSingleton(key, service);

  return service;
}

Iterable<GraphQLObjectField> stockQueryFields(Angel app) {
  var service = _getService(app);

  return [
    field(
      'stocks',
      listOf(stockGraphQLType),
      resolve: resolveViaServiceIndex(service),
//      resolve: (_, args) async {
//        var query = await service.queryCreator();
//        var result = await query.get(service.executor);
//
//        return result;
//      },
    ),
    field(
      'stock',
      stockGraphQLType,
      resolve: resolveViaServiceRead(service),
      inputs: [
        GraphQLFieldInput('id', graphQLString.nonNullable()),
      ],
    ),
  ];
}

Iterable<GraphQLObjectField> stockMutationFields(Angel app) {
  var service = _getService(app);
  var stockInputType = stockGraphQLType.toInputObject('StockInput');

  return [
    field(
      'createStock',
      stockGraphQLType,
      resolve: resolveViaServiceCreate(service),
      inputs: [
        GraphQLFieldInput('data', stockInputType.nonNullable()),
      ],
    ),
    field(
      'modifyStock',
      stockGraphQLType,
      resolve: resolveViaServiceModify(service),
      inputs: [
        GraphQLFieldInput('id', graphQLString.nonNullable()),
        GraphQLFieldInput('data', stockInputType.nonNullable()),
      ],
    ),
    field(
      'removeStock',
      stockGraphQLType,
      resolve: resolveViaServiceRemove(service),
      inputs: [
        GraphQLFieldInput('id', graphQLString.nonNullable()),
      ],
    ),
  ];
}
