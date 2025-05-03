package main

import (
	"github.com/graphql-go/graphql"
	"github.com/graphql-go/handler"
	internal "leaky-bucket-server/internal/http"
	"log"
	"net/http"
)

func main() {

	fields := graphql.Fields{
		"hello": &graphql.Field{
			Type: graphql.String,
			Resolve: func(p graphql.ResolveParams) (interface{}, error) {
				return "world", nil
			},
		},
	}

	rootQuery := graphql.ObjectConfig{Name: "RootQuery", Fields: fields}
	schemaConfig := graphql.SchemaConfig{Query: graphql.NewObject(rootQuery)}
	schema, err := graphql.NewSchema(schemaConfig)

	if err != nil {
		log.Fatalf("failed to create new schema, error: %v", err)
	}

	h := handler.New(&handler.Config{
		Schema: &schema,
		Pretty: true,
	})

	http.HandleFunc("/health", internal.HealthCheckHandler)
	http.Handle("/graphql", h)

	port := ":8080"
	log.Printf(`GraphQL server starting up on http://localhost%v`, port)
	err = http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatalf("ListenAndServe failed, %v", err)
	}
}
