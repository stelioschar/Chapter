package main

import "fmt"

// Hello Function
func Hello(name string) string {
	result := "Hello " + name
	return result
}

func main() {
	fmt.Println(Hello("cli"))
}
