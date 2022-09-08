import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

// class Cursos extends StatefulWidget {
//   const Cursos({super.key});

//   @override
//   State<Cursos> createState() => _CursosState();
// }

// class _CursosState extends State<Cursos> {
//   @override
//   Widget build(BuildContext context) {
//     return Container();
//   }
// }

class Cursos extends StatelessWidget {
  const Cursos({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Listagem de cursos"),
      ),
    );
  }
}