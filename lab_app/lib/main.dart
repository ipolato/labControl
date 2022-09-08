import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:window_size/window_size.dart';

import 'views/home.dart';
import 'views/reservas.dart';
import 'views/equipamentos.dart';
import 'views/locais.dart';
import 'views/aulas.dart';
import 'views/cursos.dart';
import 'views/disciplinas.dart';


void main() {
  runApp(
    const MaterialApp(
      home: HomePage(),
    ),
  );
}

const double windowWidth = 1280;
const double windowHeight = 960;

void setupWindow() {
  if (!kIsWeb && (Platform.isWindows || Platform.isLinux || Platform.isMacOS)) {
    WidgetsFlutterBinding.ensureInitialized();
    setWindowTitle('Lab Control');
    setWindowMinSize(const Size(windowWidth, windowHeight));
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Lab COntrol',
      theme: ThemeData(
        primarySwatch: Colors.blueGrey,
      ),
      home: DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            bottom: const TabBar(
              tabs: [
                Tab(
                  icon: Icon(Icons.home_outlined),
                  text: 'Home',
                ),
                Tab(
                  icon: Icon(Icons.storage_outlined),
                  text: 'Reservas',
                ),
                Tab(
                  icon: Icon(Icons.science_outlined),
                  text: 'Equipamentos',
                ),
                Tab(
                  icon: Icon(Icons.location_pin),
                  text: 'Locais',
                ),
                Tab(
                  icon: Icon(Icons.calendar_month),
                  text: 'Aulas',
                ),
                Tab(
                  icon: Icon(Icons.line_style_outlined),
                  text: 'Cursos',
                ),
                Tab(
                  icon: Icon(Icons.view_quilt_outlined),
                  text: 'Disciplinas',
                ),
              ],
            ),
            title: const Text('Controle de Laboratórios'),
          ),
          body: const TabBarView(
            children: [
              Home(),
              Reservas(),
              Equipamentos(),
              Locais(),
              Aulas(),
              Cursos(),
              Disciplinas(),
            ],
          ),
        ),
      ),
    );
  }
}
